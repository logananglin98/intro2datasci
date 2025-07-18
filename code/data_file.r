library(readxl)
download.file("https://raw.githubusercontent.com/pearcej/intro2datasci/main/code/nst-est2019-0-edited.xlsx", tmp <- tempfile(fileext = ".xlsx"))
USstatePops <- read_excel(tmp, skip = 3)
head(USstatePops)