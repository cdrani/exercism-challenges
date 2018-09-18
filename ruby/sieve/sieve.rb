class Sieve
  def initialize (num)
    @num = num
  end

  def primes
    result = []
    return result if (@num <  2)
    return [2] if (@num == 2)
    arr = Array.new(@num + 1, true)
    for i in 2..Math.sqrt(@num)
      counter = 0
      j = i
      if (arr[i])
        while j < @num
          j = i * i + counter * i
          arr[j] = false
          counter += 1
        end
      end
    end

    arr.each_with_index do |n, i|
      if (n == true && i > 1)
        result.push(i)
      end
    end
    result
  end
end