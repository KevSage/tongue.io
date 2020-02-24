require 'httparty'


class Phrase < ApplicationRecord
    has_many :phrasebooks
    has_many :entries, through: :phrasebooks
    include HTTParty

    def translate
        api = ENV['API']
        url = 'https://translation.googleapis.com/language/translate/v2?key='
        target_language = "fr"
        input = self.input
    
        request = HTTParty.get(url + api + '&q=' + input + '&source=en' + '&target=' + target_language)
        response = JSON.parse(request.body)
        # translation = response['data']['translations'][0]['translatedText']
        # translation
        response
      end
end
