class Pangram 
  def self.pangram?(sentence)
    return false if sentence.empty?
    sen = sentence.downcase.gsub(/[^a-z]/, '').split('')

    hash = {}
    sen.each do |i| 
      hash[i] = 1 if hash[i].nil? 
    end
    hash.size == 26
  end
end
