class PlacesController < ApplicationController
  def index
    @places = Place.all
  end

  def show
    @place = Place.find_by(id: params[:id])
  end

  def new
    @place = Place.new
  end

  def edit
  end

  def create
    place = current_user.places.create(place_params)
    redirect_to places_path
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
    params.require(:place).permit(:name, :location, :duration, :description, :image, :user_id)
  end
end
