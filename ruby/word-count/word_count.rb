class Phrase
  def initialize(phrase)
    @phrase = phrase.downcase.gsub(/\b[^a-z0-9']+/, ' ')
  end
  def word_count
    count = {}
    words = @phrase.split(' ').each { |word|
      if (word[0] == "'") then
        word[0] = ''
        word[-1] = ''
      end
      count[word].nil? ? count[word] = 1 : count[word] += 1
    }
    count
  end
end