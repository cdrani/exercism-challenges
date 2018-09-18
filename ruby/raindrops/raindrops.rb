class Raindrops
  def self.convert(num)
    str = ''
    cases = { 3 => "Pling", 5 => "Plang", 7 => "Plong" }
    for key in cases.keys
      if (num % key == 0)
        str += cases[key]
      end
    end
    str.empty? ? num.to_s : str
  end
end