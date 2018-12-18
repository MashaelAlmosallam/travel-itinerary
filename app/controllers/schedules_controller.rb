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
    while current_day < schedule.end_day
      nine_am = current_day.midnight + 9.hours
      start_time = current_day
      morning_start_time = nine_am > start_time ? start_time : nine_am
      evening_end_time = schedule.end_day > (current_day.midnight + 18.hours) ? (current_day.midnight + 18.hours) : schedule.end_day
      original_hours_left = (evening_end_time - morning_start_time) / 60 / 60
      hours_left_per_day = original_hours_left
      while hours_left_per_day > 0
        p = Place.all.sample
        hours_left_per_day -= p.duration
        if hours_left_per_day > 0
          start_time = morning_start_time
          morning_start_time += p.duration.hours
          schedule.visits.create(day: count, place_id: p.id, start_time: start_time, end_time: start_time + p.duration.hours)
        end
      end
      current_day += 1.day
      count += 1
    end
    redirect_to schedule
  end

  private

  def schedule_params
    params.require(:schedule).permit(:city, :location, :image, :description, :start_day, :end_day)
  end
end
