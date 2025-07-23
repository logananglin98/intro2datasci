tmp_file <- tempfile(fileext = ".txt")
download.file(url = "https://raw.githubusercontent.com/pearcej/intro2datasci/main/code/afl.txt",destfile = tmp_file)
attend <- read.delim(tmp_file, header=TRUE)

attach(attend)