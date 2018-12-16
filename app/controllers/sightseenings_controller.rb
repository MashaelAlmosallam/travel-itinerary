class SightseeningsController < ApplicationController
  def index
    @places = Sightseeing.all
  end

  def show
    @place = Sightseeing.find_by(id: params[:id])
  end

  def new
    @place = Sightseeing.new
  end

  def edit
  end

  def create
    place = Sightseeing.create(place_params)
    redirect_to sightseenings_path
  end

  # def update
  #   author = Author.find(params[:id])
  #   author.update(author_params)
  #   redirect_to author_path(author)
  # end

  # def destroy
  #   author = Author.find_by(id: params[:id])
  #   author.destroy
  #   redirect_to authors_path
  # end

  private

  def place_params
    params.require(:place).permit(:name, :location, :duration, :description, :image)
  end
end
