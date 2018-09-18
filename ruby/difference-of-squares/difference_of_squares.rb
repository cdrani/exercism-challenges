class Squares
  def initialize(num)
    @num = num
  end

  def square_of_sum 
    sum = 0
    for i in 1..@num
      sum += i
    end
    sum ** 2
  end
  
  def sum_of_squares 
    square = []
    for i in 1..@num
      square << i ** 2
    end
   square.inject(:+)  
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
