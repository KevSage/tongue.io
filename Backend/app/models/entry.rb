require 'httparty'

class Entry < ApplicationRecord
  belongs_to :phrasebook
  belongs_to :phrase
  include HTTParty

  
# Remove translate from entries controller/model to phrase

  def translate
    api = ENV['API']
    url = 'https://translation.googleapis.com/language/translate/v2?key='
    target_language = self.phrasebook.language.abbr
    input = self.phrase.input
    # byebug

    request = HTTParty.get(url + api + '&q=' + input + '&source=en' + '&target=' + target_language)
    response = JSON.parse(request.body)
    translation = response['data']['translations'][0]['translatedText']
  end
end
