require 'httparty'


class Phrase < ApplicationRecord
    has_many :phrasebooks
    has_many :entries, through: :phrasebooks
    include HTTParty

    def translate(target)
        api = ENV['API']
        url = 'https://translation.googleapis.com/language/translate/v2?key='
        input = self.input
    
        request = HTTParty.get(url + api + '&q=' + input + '&source=en' + '&target=' + target)
        response = JSON.parse(request.body)
        # translation = response['data']['translations'][0]['translatedText']
        # translation
        response
      end
end
