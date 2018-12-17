class SchedulesController < ApplicationController
  def show
    @schedule = Schedule.find_by id: params[:id]
    @day_visits = @schedule.visits.group_by do |visit|
      visit.day
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
      hours_til_midnight = ((current_day.midnight + 1.day - 3.hours) - current_day) / 60 / 60
      while hours_til_midnight > 0
        p = Place.all.sample
        hours_til_midnight -= p.duration
        if hours_til_midnight > 0
          schedule.visits.create(day: count, place_id: p.id)
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
