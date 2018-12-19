class SchedulesController < ApplicationController
  def index
    schedules = current_user.schedules
    schedules = schedules.map do |s|
      s.as_json(include: [:visits, :user])
    end
    render json: schedules
  end

  def show
    @schedule = Schedule.find_by id: params[:id]
    @day_visits = @schedule.visits.group_by do |visit|
      visit.day
    end
    respond_to do |f|
      f.html
      f.json { render json: {schedule: @schedule, visits: @schedule.visits.as_json(include: [:place])} }
    end
  end

  def new
    @schedule = Schedule.new
  end

  def create
    schedule = current_user.schedules.create(schedule_params)
    current_day = schedule.start_day
    count = 1
    while current_day <= schedule.end_day
      morning_start_time = current_day.midnight + 9.hours
      evening_end_time = current_day.midnight + 18.hours
      if current_day == schedule.start_day
        morning_start_time = schedule.start_day
      end
      if current_day == schedule.end_day
        evening_end_time = schedule.end_day
      end
      while morning_start_time < evening_end_time
        p = Place.all.sample
        current_search = 1
        while morning_start_time + p.duration.hours > evening_end_time && current_search <= 3
          p = Place.all.sample
          current_search += 1
        end
        if current_search <= 3
          schedule.visits.create day: count, place_id: p.id, start_time: morning_start_time, end_time: morning_start_time + p.duration.hours
        end
        morning_start_time += p.duration.hours
      end
      current_day += 1.day
      count += 1
    end

    redirect_to schedule
  end

  def new_visit
    visit = Visit.find params[:id]
    duration = visit.place.duration
    new_place = Place.order("RANDOM()").find_by("duration <= #{duration}")
    visit.place_id = new_place.id
    visit.save
    render json: visit.as_json(include: [:place])
  end

  private

  def schedule_params
    params.require(:schedule).permit(:city, :location, :image, :description, :start_day, :end_day)
  end
end
