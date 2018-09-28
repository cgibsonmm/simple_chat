class PagesController < ApplicationController
  def home
    @messages = Message.last(40)
    @message = Message.new
  end
end
