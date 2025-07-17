# Like ArrivalProbability, but works with unsorted list of delay times
DelayProbability <- function(delays, increment, max) {
  # Initialize an empty vector
  plist <- c()
  
  # Probability is defined over the size of this sample of delay times
  delayLen <- length(delays)
  
  # Check for invalid input
  if (increment > max) {
    return(NULL)
  }
  
  # Calculate cumulative probability at each increment
  for (i in seq(increment, max, by = increment)) {
    plist <- c(plist, sum(delays <= i) / delayLen)
  }
  
  return(plist)
}