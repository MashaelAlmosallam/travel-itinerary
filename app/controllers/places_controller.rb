class PlacesController < ApplicationController
  def index
    @places = Place.all
    respond_to do |format|
      format.html
      format.json { render json: @places }
    end
  end

  def show
    @place = Place.find_by(id: params[:id])
    respond_to do |f|
      f.html
      f.json { render json: @place }
    end
  end

  def new
    @place = Place.new
  end

  def edit
  end

  def create
    place = Place.create(place_params)
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
    params.require(:place).permit(:name, :location, :duration, :description, :image)
  end
end
