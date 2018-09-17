class Gigasecond
  def self.from(t)
    Time.at(t.strftime("%s").to_i + 1_000_000_000)
  end
end
