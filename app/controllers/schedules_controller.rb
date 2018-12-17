class SchedulesController < ApplicationController
  def create
    schedule = current_user.Schedule.create(schedule_params)
    #redirect_to book_path(book)

  end

  def new
    @schedule = Schedule.new
  end

  private

  def schedule_params
    params.require(:schedule).permit(:name, :location, :image, :description, :user_id)
  end
end
