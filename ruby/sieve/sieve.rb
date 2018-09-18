class Sieve
  def initialize (num)
    @num = num
  end

# Input: an integer n > 1.
#  Let A be an array of Boolean values, indexed by integers 2 to n,
#  initially all set to true.

#  for i = 2, 3, 4, ..., not exceeding √n:
#    if A[i] is true:
#      for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
#        A[j] := false.

#  Output: all i such that A[i] is true.

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
          # if  (j > @num)
          #   break
          # end
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