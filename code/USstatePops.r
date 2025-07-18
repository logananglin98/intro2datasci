library(readxl)
download.file("https://raw.githubusercontent.com/pearcej/intro2datasci/main/code/nst-est2019-0-clean.xlsx", tmp <- tempfile(fileext = ".xlsx"))
USstatePops <- read_excel(tmp, col_names = FALSE)
2:49
print(paste("any string", variable))