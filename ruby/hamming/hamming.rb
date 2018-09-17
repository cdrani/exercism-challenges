class Hamming
  def self.compute (str1, str2)
    raise ArgumentError if str1.length != str2.length
    return 0 if str1 == str2
    ar = []
    str1.split('').each_with_index { |val, i| ar.push(val) if val != str2[i] }
    ar.size
  end
end