class Bob
  def self.only_n(str)
    mystr = str
    mystr.gsub!(/[\:\,\)\s]+/, '')
    return Float(mystr) != nil rescue false
  end
  def self.hey(str)
    str.strip!
    if (str.empty?)
      return "Fine. Be that way!"
    elsif (str[-1] == '?')
      if (str.upcase == str && only_n(str) == false && str.match(/[A-Z]+/))
        return "Calm down, I know what I'm doing!"
      end
      return "Sure."
    elsif (str.upcase == str && only_n(str) == false)
      return "Whoa, chill out!"
    else
      return "Whatever."
    end
  end
end