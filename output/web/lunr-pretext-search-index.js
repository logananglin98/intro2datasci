var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "what-is-data",
  "level": "1",
  "url": "what-is-data.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is Data?",
  "body": " What is Data?    Data comes from the Latin word, \"datum,\" meaning a \"thing given.\" Although the term \"data\" has been used since as early as the 1500s, modern usage started in the 1940s and 1950s as practical electronic computers began to input, process, and output data. This chapter discusses the nature of data and introduces key concepts for newcomers without computer science experience.    The inventor of the World Wide Web, Tim Berners-Lee, is often quoted as having said, \"Data is not information, information is not knowledge, knowledge is not understanding, understanding is not wisdom.\" This quote suggests a kind of pyramid, where data are the raw materials that make up the foundation at the bottom of the pile, and information, knowledge, understanding and wisdom represent higher and higher levels of the pyramid. In one sense, the major goal of a data scientist is to help people to turn data into information and onwards up the pyramid. Before getting started on this goal, though, it is important to have a solid sense of what data actually are. (Notice that this book treats the word \"data\" as a plural noun in common usage you may often hear it referred to as singular instead.) Read on for an introduction to the most basic ingredient to the data scientist’s efforts: data.  A substantial amount of what we know and say about data in the present day comes from work by a U.S. mathematician named Claude Shannon. Shannon worked before, during, and after World War II on a variety of mathematical and engineering problems related to data and information. Not to go crazy with quotes, or anything, but Shannon is quoted as having said, \"The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point.\" This means that if you came into a conversation in the middle, you would have a hard time reconstructing the beginning even approximately! This quote helpfully captures key ideas about data that are important in this book by focusing on the idea of data as a message that moves from a source to a recipient. Think about the simplest possible message that you could send to another person over the phone, via a text message, video conference or even in person. Let’s say that a family member had asked you a question, for example whether you wanted to eat fish for dinner that night. You can answer yes or no. You can call your family member on the phone, and say yes or no. You might have a bad connection, though, and your family member might not be able to hear you. Likewise, you could send them a text message with your answer, yes or no, and hope that they have their phone turned on so that they can receive the message. Or you could tell that family member face to face, hoping that they did not have their earbuds turned up so loud that they couldn’t hear you. In all three cases you have a one \"bit\" message that you want to send to your family member, yes or no, with the goal of \"reducing their uncertainty\" about whether you want fish for dinner. Assuming that message gets through without being garbled or lost, you will have successfully transmitted one bit of information from you to them. Claude Shannon developed some mathematics, now often referred to as \"Information Theory,\" that carefully quantified how bits of data transmitted accurately from a source to a recipient can reduce uncertainty by providing information. A great deal of the computer networking equipment and software in the world today and especially the huge linked worldwide network we call the Internet is primarily concerned with this one basic task of getting bits of information from a source to a destination.  Once we are comfortable with the idea of a \"bit\" as the most basic unit of information, either \"yes\" or \"no,\" we can combine bits together to make more complicated structures. First, let’s switch labels just slightly. Instead of \"no\" we will start using zero, and instead of \"yes\" we will start using one. So we now have a single digit, albeit one that has only two possible states: zero or one (we’re temporarily making a rule against allowing any of the bigger digits like three or seven). This is in fact the origin of the word \"bit,\" which is a squashed down version of the phrase \"Binary digIT.\" A single binary digit can be 0 or 1, and that would give us just two options like “yes” or “no” but there is nothing stopping us from using more than one binary digit in our messages. Have a look at the example in the table below:      MEANING  2ND DIGIT  1ST DIGIT    No  0  0    Maybe  0  1    Probably  1  0    Definitely  1  1     Here we have started to use two binary digits two bits to create a \"code book\" for four different messages that we might want to transmit to our friend about her dinner party. If we were certain that we would not attend, we would send her the message 0 0. If we definitely planned to attend we would send her 1 1. But we have two additional possibilities, \"Maybe\" which is represented by 0 1, and \"Probably\" which is represented by 1 0. It is interesting to compare our original yes\/no message of one bit with this new four-option message with two bits. In fact, every time you add a new bit you double the number of possible messages you can send. So three bits would give eight options and four bits would give 16 options. How many options would there be for five bits?  When we get up to eight bits which provides 256 different combinations we finally have something of a reasonably useful size to work with. Eight bits is commonly referred to as a \"byte\" this term probably started out as a play on words with the word bit. (Try looking up the word \"nibble\" online!) A byte offers enough different combinations to encode all of the letters of the alphabet, including capital and small letters. There is an old rulebook called \"ASCII\" the American Standard Code for Information Interchange which matches up patterns of eight bits with the letters of the alphabet, punctuation, and a few other odds and ends. For example the bit pattern 0100 0001 represents the capital letter A and the next higher pattern, 0100 0010, represents capital B. Try looking up an ASCII table online (for example, http:\/\/www.asciitable.com\/ ) and you can find all of the combinations. Note that the codes may not actually be shown in binary because it is so difficult for people to read long strings of ones and zeroes. Instead you may see the equivalent codes shown in hexadecimal (base 16), octal (base 8), or the most familiar form that we all use everyday, base 10. Although you might remember base conversions from high school math class, some people find it fun to practice converting between binary, hexadecimal, and decimal (base 10). You might also enjoy Vi Hart’s Binary Hand Dance video in which she and her family count in binary on their fingers.  Most of the work we do in this book will be in decimal, but more complex work with data often requires understanding hexadecimal and being able to know how a hexadecimal number, like 0xA3, translates into a bit pattern. We don’t need that right now, though. If you are interested, you might try searching online for \"binary conversion tutorial\" and you will find lots of useful sites.  "
},
{
  "id": "what-is-data-6",
  "level": "2",
  "url": "what-is-data.html#what-is-data-6",
  "type": "Table",
  "number": "1.1.1",
  "title": "",
  "body": "    MEANING  2ND DIGIT  1ST DIGIT    No  0  0    Maybe  0  1    Probably  1  0    Definitely  1  1    "
},
{
  "id": "combining-bytes-into-larger-structures",
  "level": "1",
  "url": "combining-bytes-into-larger-structures.html",
  "type": "Section",
  "number": "1.2",
  "title": "Combining Bytes into Larger Structures",
  "body": " Combining Bytes into Larger Structures  Now that we have the idea of a byte as a small collection of bits (usually eight) that can be used to store and transmit things like letters and punctuation marks, we can start to build up to bigger and better things. First, it is very easy to see that we can put bytes together into lists in order to make a \"string\" of letters, what is often referred to as a \"character string.\" If we have a piece of text, like \"this is a piece of text\" we can use a collection of bytes to represent it like this:   011101000110100001101001011100110010000001101001011100110010 000001100001001000000111000001101001011001010110001101100101 001000000110111101100110001000000111010001100101011110000111 0100   Now nobody wants to look at that, let alone encode or decode it by hand, but fortunately, the computers and software we use these days takes care of the conversion and storage automatically. For example, when we tell the open source data language \"R\" to store \"this is a piece of text\" for us like this:  myText <- \"this is a piece of text\"  ...we can be certain that inside the computer there is a long list of zeroes and ones that represent the text that we just stored. By the way, in order to be able to get our piece of text back later on, we have made a kind of storage label for it (the word \"myText\" above). Anytime that we want to remember our piece of text or use it for something else, we can use the label \"myText\" to open up the chunk of computer memory where we have put that long list of binary digits that represent our text. The left-pointing arrow made up out of the less-than character (\"<\") and the dash character (\"-\") gives R the command to take what is on the right hand side (the quoted text) and put it into what is on the left hand side (the storage area we have labeled \"myText\"). Some people call this the assignment arrow and it is used in some computer languages to make it clear to the human who writes or reads it which direction the information is flowing.  From the computer’s standpoint, it is even simpler to store, remember, and manipulate numbers instead of text. Remember that an eight bit byte can hold 256 combinations, so just using that very small amount we could store the numbers from 0 to 255. (Of course, we could have also done 1 to 256, but much of the counting and numbering that goes on in computers starts with zero instead of one.) Really, though, 255 is not much to work with. We couldn’t count the number of houses in most towns or the number of cars in a large parking garage unless we can count higher than 255. If we put together two bytes to make 16 bits we can count from zero up to 65,535, but that is still not enough for some of the really big numbers in the world today (for example, there are more than 200 million cars in the U.S. alone). Most of the time, if we want to be flexible in representing an integer (a number with no decimals), we use four bytes stuck together. Four bytes stuck together is a total of 32 bits, and that allows us to store an integer as high as 4,294,967,295.  Things get slightly more complicated when we want to store a negative number or a number that has digits after the decimal point. If you are curious, try looking up \"two's complement\" for more information about how signed numbers are stored and \"floating point\" for information about how numbers with digits after the decimal point are stored. For our purposes in this book, the most important thing to remember is that text is stored differently than numbers, and among numbers integers are stored differently than floating point. Later we will find that it is sometimes necessary to convert between these different representations, so it is always important to know how it is represented.  So far we have mainly looked at how to store one thing at a time, like one number or one letter, but when we are solving problems with data we often need to store a group of related things together. The simplest place to start is with a list of things that are all stored in the same way. For example, we could have a list of integers, where each thing in the list is the age of a person in your family. The list might look like this: 43, 42, 12, 8, 5. The first two numbers are the ages of the parents and the last three numbers are the ages of the kids. Naturally, inside the computer each number is stored in binary, but fortunately we don’t have to type them in that way or look at them that way. Because there are no decimal points, these are just plain integers and a 32 bit integer (4 bytes) is more than enough to store each one. This list contains items that are all the same \"type\" or \"mode.\" In R, \" vector \" is an ordered list of data elements of the same data type (e.g. all integers or all strings, etc). We can create a vector with R very easily by listing the data elements, separated by commas and inside parentheses:  c(43, 42, 12, 8, 5)  The letter \"c\" in front of the opening parenthesis stands for concatenate, which means to join things together. We can also put in some of what we learned above to store our vector in a named location:  myFamAge <- c(43, 42, 12, 8, 5)  When we learn to run our code, we will have just created our first \"data set.\" It is very small, for sure, only five items, but also very useful for illustrating several major concepts about data. Here’s a recap:     In the heart of the computer, all data are represented in binary. One binary digit, or bit, is the smallest chunk of data that we can send from one place to another.      Although all data are at heart binary, computers and software help to represent data in more convenient forms for people to see. Three important representations are: \"character\" for representing text, \"integer\" for representing numbers with no digits after the decimal point, and \"floating point\" for numbers that may have digits after the decimal point. The list of numbers in our tiny data set just above are integers.      Numbers and text can be collected into lists, which the open source program \"R\" calls vectors. A vector has a length, which is the number of items in it, and a \"mode\" which is the type of data stored in the vector. The vector we were just working on has a length of 5 and a mode of integer.      In order to be able to remember where we stored a piece of data, most computer programs, including R, give us a way of labeling a chunk of computer memory. We chose to give the 5-item vector up above the name \"myFamAge.\" Some people might refer to this named list as a \"variable,\" because the value of it varies, depending upon which member of the list you are examining.      If we gather together one or more variables into a sensible group, we can refer to them together as a \"data set.\" Usually, it doesn’t make sense to refer to something with just one variable as a data set, so usually we need at least two variables. Technically, though, even our very simple \"myFamAge\" counts as a data set, albeit a very tiny one.      Later in the book we will install and run the open source \"R\" data program and learn more about how to create data sets, summarize the information in those data sets, and perform some simple calculations and transformations on those data sets.      Chapter Challenge  Discover the meaning of \"Boolean Logic\" and the rules for \"and\", \"or\", \"not\", and \"exclusive or\". Once you have studied this for a while, write down on a piece of paper, without looking, all of the binary operations that demonstrate these rules.    Sources     Claude Shannon      Information theory      An Introduction to R      Binary Hand Dance by Vi Hart      ASCII Table and Description      Jupyter Repository for Introduction to Data Science       Test Yourself   Question: The smallest unit of information commonly in use in today’s computers is called:    A Bit    A Byte    A Nibble    An Integer     "
},
{
  "id": "combining-bytes-into-larger-structures-3",
  "level": "2",
  "url": "combining-bytes-into-larger-structures.html#combining-bytes-into-larger-structures-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "011101000110100001101001011100110010000001101001011100110010 000001100001001000000111000001101001011001010110001101100101 001000000110111101100110001000000111010001100101011110000111 0100 "
},
{
  "id": "combining-bytes-into-larger-structures-9",
  "level": "2",
  "url": "combining-bytes-into-larger-structures.html#combining-bytes-into-larger-structures-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "test-yourself-2",
  "level": "2",
  "url": "combining-bytes-into-larger-structures.html#test-yourself-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Question: "
},
{
  "id": "ch2-identify-data-problems",
  "level": "1",
  "url": "ch2-identify-data-problems.html",
  "type": "Chapter",
  "number": "2",
  "title": "Identifying Data Problems",
  "body": " Identifying Data Problems    Data Science is different from other areas such as mathematics or statistics. Data Science is an applied activity and data scientists serve the needs and solve the problems of data users. Before you can solve a problem, you need to identify it and this process is not always as obvious as it might seem. In this chapter, we discuss the identification of data problems.    Apple farmers live in constant fear, first for their blossoms and later for their fruit. A late spring frost can kill the blossoms. Hail or extreme wind in the summer can damage the fruit. More generally, farming is an activity that is first and foremost in the physical world, with complex natural processes and forces, like weather, that are beyond the control of humankind.  In this highly physical world of unpredictable natural forces, is there any role for data science? On the surface there does not seem to be. But how can we know for sure? Having a nose for identifying data problems requires openness, curiosity, creativity, and a willingness to ask a lot of questions. In fact, if you took away from the first chapter the impression that a data scientist sits in front of a computer all day and works a crazy program like R, that is a mistake. Every data scientist must (eventually) become immersed in the problem domain where she is working. The data scientist may never actually become a farmer, but if you are going to identify a data problem that a farmer has, you have to learn to think like a farmer, to some degree.  To get this domain knowledge you can read or watch videos, but the best way is to ask \"subject matter experts\" (in this case farmers) about what they do. The whole process of asking questions deserves its own treatment, but for now there are three things to think about when asking questions. First, you want the subject matter experts, or SMEs, as they are sometimes called, to tell stories of what they do. Then you want to ask them about anomalies: the unusual things that happen for better or for worse. Finally, you want to ask about risks and uncertainty: what are the situations where it is hard to tell what will happen next and what happens next could have a profound effect on whether the situation ends badly or well. Each of these three areas of questioning reflects an approach to identifying data problems that may turn up something good that could be accomplished with data, information, and the right decision at the right time.  The purpose of asking about stories is that people mainly think in stories. From farmers to teachers to managers to CEOs, people know and tell stories about success and failure in their particular domain. Stories are powerful ways of communicating wisdom between different members of the same profession and they are ways of collecting a sense of identity that sets one profession apart from another profession. The only problem is that stories can be wrong.  If you can get a professional to tell the main stories that guide how she conducts her work, you can then consider how to verify those stories. Without questioning the veracity of the person that tells the story, you can imagine ways of measuring the different aspects of how things happen in the story with an eye towards eventually verifying (or sometimes debunking) the stories that guide professional work.  For example, the farmer might say that in the deep spring frost that occurred five years ago, the trees in the hollow were spared frost damage while the trees around the ridge of the hill had more damage. For this reason, on a cold night the farmer places most of the smudgepots (containers that hold a fuel that creates a smoky fire) around the ridge. The farmer strongly believes that this strategy works, but does it? It would be possible to collect time-series temperature data from multiple locations within the orchard on cold and warm nights, and on nights with and without smudgepots. The data could be used to create a model of temperature changes in the different areas of the orchard and this model could support, improve, or debunk the story.  A second strategy for problem identification is to look for the exception cases, both good and bad. A little later in the book we will learn about how the core of classic methods of statistical inference is to characterize \"the center\" the most typical cases that occur and then examine the extreme cases that are far from the center for information that could help us understand an intervention or an unusual combination of circumstances. Identifying unusual cases is a powerful way of understanding how things work, but it is necessary first to define the central or most typical occurrences in order to have an accurate idea of what constitutes an unusual case.  Coming back to our farmer friend, in advance of a thunderstorm late last summer, a powerful wind came through the orchard, tearing the fruit off the trees. Most of the trees lost a small amount of fruit: the dropped apples could be seen near the base of the tree. One small grouping of trees seemed to lose a much larger amount of fruit, however, and the drops were apparently scattered much further from the trees. Is it possible that some strange wind conditions made the situation worse in this one spot? Or is it just a matter of chance that a few trees in the same area all lost a bit more fruit than would be typical.  A systematic count of lost fruit underneath a random sample of trees would help to answer this question. The bulk of the trees would probably have each lost about the same amount, but more importantly, that \"typical\" group would give us a yardstick against which we could determine what would really count as unusual. When we found an unusual set of cases that was truly beyond the  limits of typical, we could rightly focus our attention on these to try to understand the anomaly.  A third strategy for identifying data problems is to find out about risk and uncertainty. If you read the previous chapter you may remember that a basic function of information is to reduce uncertainty. It is often valuable to reduce uncertainty because of how risk affects the things we all do. At work, at school, at home, life is full of risks: making a decision or failing to do so sets off a chain of events that may lead to something good or something not so good. It is difficult to say, but in general we would like to narrow things down in a way that maximizes the chances of a good outcome and minimizes the chance of a bad one. To do this, we need to make better decisions and to make better decisions we need to reduce uncertainty. By asking questions about risks and uncertainty (and decisions) a data scientist can zero in on the problems that matter. You can even look at the previous two strategies asking about the stories that comprise professional wisdom and asking about anomalies\/unusual cases in terms of the potential for reducing uncertainty and risk.  In the case of the farmer, much of the risk comes from the weather, and the uncertainty revolves around which countermeasures will be cost effective under prevailing conditions. Consuming lots of expensive oil in smudgepots on a night that turns out to be quite warm is a waste of resources that could make the difference between a profitable or an unprofitable year. So more precise and timely information about local weather conditions might be a key focus area for problem solving with data. What if a live stream of national weather service doppler radar could appear on the farmer’s smartphone? Let’s build an app for that...    "
},
{
  "id": "the-r-language",
  "level": "1",
  "url": "the-r-language.html",
  "type": "Subsubsection",
  "number": "3.1",
  "title": "The R Language",
  "body": " The R Language    \"R\" is an open source software programming language designed for statistical computing and graphics. It was developed by volunteers as a service to the community of scientists, researchers, and data scientists and data analysts who now use it. R is free to download and use. Lots of advice and guidance is available online to help users learn R, which is good because it is a powerful and complex language, in reality it is a full featured programming language that is dedicated to understanding data.     As an open source program with an active user community, R enjoys constant innovation thanks to the dedicated developers who work on it. One useful innovation was the development of R-Studio, an integrated development environment or IDE for R where one can easily edit code and text as well as run R code and combine the results with text. The cloud-based version of R-Studio is located at https:\/\/rstudio.cloud\/ .   If you are new to computers, programming, and\/or data science, welcome to an exciting chapter that will open the door to the most powerful free data analytics tool ever created anywhere in the universe, no joke. On the other hand, if you are experienced with spreadsheets, statistical analysis, or accounting software you are probably thinking that this book has now gone off the deep end, never to return to sanity and all that is good and right in user interface design. Both perspectives are reasonable. The \"R\" open source data analysis programming language is immensely powerful, flexible, and especially \"extensible\" (meaning that people can create new capabilities for it quite easily). At the same time, R is \"command line\" oriented, meaning that most of the work that one needs to perform is done through carefully crafted text instructions, many of which have tricky syntax (the punctuation, grammar, and related rules for making a command that works). In addition, R is not especially good at giving feedback or error messages that help the user to repair mistakes or figure out what is wrong when results look funny.  But there is a method to the madness here. One of the virtues of R as a teaching tool is that it hides very little. The successful user must fully understand what the \"data situation\" is or else the R commands will not work. With a spreadsheet, it is easy to type in a lot of numbers and a formula like =FORECAST() and a result pops into a cell like magic, whether it makes any sense or not. With R you have to know your data, know what you can do with it, know how it has to be transformed, and know how to check for problems. Because R is a programming language, it forces users to think about problems in terms of data objects, methods that can be applied to those objects, and procedures for applying those methods. These are important metaphors used in modern programming languages, and no data scientist can succeed without having at least a rudimentary understanding of how software is programmed, tested, and integrated into working systems. The extensibility of R means that new modules are being added all the time by volunteers: R was among the first analysis programs to integrate capabilities for drawing data directly from the Twitter® social media platform. So you can be sure that whatever the next big development is in the world of data, that someone in the R community will start to develop a new \"package\" for R that will make use of it. Finally, the lessons one learns in working with R are almost universally applicable to other programs and environments. If one has mastered R, it is a relatively small step to get the hang of other statistical languages like SAS® statistical programming language or SPSS®. (SAS and SPSS are two of the most widely used commercial statistical analysis programs). So with no need for any licensing fees paid by school, student, or teacher it is possible to learn the most powerful data analysis system in the universe and take those lessons with you no matter where you go. It will take a bit of patience though, so please hang in there!  Joseph J. Allaire is an entrepreneur, software engineer, and the originator of some remarkable software products including \"ColdFusion,\" which was later sold to the web media tools giant Macromedia and Windows Live Writer, a Microsoft blogging tool. Starting in 2009, Allaire began working with a small team to develop an open source program that enhances the usability and power of R. It is called R-Studio.  "
},
{
  "id": "the-r-language-4",
  "level": "2",
  "url": "the-r-language.html#the-r-language-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "syntax "
},
{
  "id": "r-studio",
  "level": "1",
  "url": "r-studio.html",
  "type": "Subsubsection",
  "number": "3.2",
  "title": "R-studio",
  "body": " R-studio  R-Studio is an Integrated Development Environment, abbreviated as IDE. Every software engineer knows that if you want to get serious about building something out of code, you must use an IDE because it will make your programming so much easier.  Before we start that, let’s consider why we need an IDE to work with R. One can run R commands using what is known as the \"R console,\" but the console is an old technology term that dates back to the days when computers were so big that they each occupied their own air conditioned room. Within that room there was often one \"master control station\" where a computer operator could do just about anything to control the giant computer by typing in commands. That station was known as the console. The term console is now used in many cases to refer to any interface where you can directly type in commands.  It is way too easy to make a mistake to create what computer scientists refer to as a bug if you are doing every little task via the console. Using an IDE, we can easily build reusable pieces of code. The IDE gives us the capability to open up the process of creation, to peer into the component parts when we need to, and to close the hood and hide them when we don’t. Because we are working with data, we also need a way of closely inspecting the data, both its contents and its structure. It can get pretty tedious doing this at the R console, where almost every piece of output is a chunk of text and longer chunks scroll off the screen before you can see them. As an IDE for R, R-Studio allows us to control and monitor both our code and our text in a way that supports the creation of reusable elements.  "
},
{
  "id": "r-markdown",
  "level": "1",
  "url": "r-markdown.html",
  "type": "Subsubsection",
  "number": "3.3",
  "title": "R Markdown",
  "body": " R Markdown  R Markdown is a language that many consider to be a key authoring framework for data science. You can use a single R Markdown file to save and execute code as well as to create high quality reports. It can be used to actually run the code and embed the results in your report right alongside the text that you write.  R-Markdown files have an .Rmd extension. It is this file that contains a combination of R Markdown and R code chunks. The .Rmd file is run by pushing a button in R-Studio labelled \"knitr,\" which stands for \"knit R.\" When this button is pushed, R-Studio executes all of the R code chunks and combines the results with the text in the document. You can use R-Markdown to create a web page, pdf, MS Word document, slide show, and a whole host of other file types. This may sound a bit complicated, but R-Studio makes it pretty easy.  "
},
{
  "id": "video-what-is-r-markdown-what-is-r-markdown",
  "level": "1",
  "url": "video-what-is-r-markdown-what-is-r-markdown.html",
  "type": "Subsubsection",
  "number": "3.4",
  "title": "<div class=\"image-box\" style=\"width: 100%; margin-left: 0%; margin-right: 0%;\"><img src=\"external\/media\/image34.png\" class=\"contained\" \/><\/div><details class=\"ptx-footnote\" aria-live=\"polite\" id=\"video-what-is-r-markdown-what-is-r-markdown-1-2\"><summary class=\"ptx-footnote__number\" title=\"Footnote 3.4.8\"><sup> 8 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"video-what-is-r-markdown-what-is-r-markdown-1-2\"><code class=\"code-inline tex2jax_ignore\">vimeo.com\/178485416<\/code><\/div><\/details>What is R-Markdown<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"video-what-is-r-markdown-what-is-r-markdown-1-4\"><summary class=\"ptx-footnote__number\" title=\"Footnote 3.4.9\"><sup> 9 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"video-what-is-r-markdown-what-is-r-markdown-1-4\"><code class=\"code-inline tex2jax_ignore\">vimeo.com\/178485416<\/code><\/div><\/details>",
  "body": " What is R-Markdown  "
},
{
  "id": "using-r-in-r-studio-cloud",
  "level": "1",
  "url": "using-r-in-r-studio-cloud.html",
  "type": "Subsubsection",
  "number": "3.5",
  "title": "Using R in R-Studio Cloud",
  "body": " Using R in R-Studio Cloud  Let’s get started. Your instructor has created an R-Studio classroom R-Studio Cloud CSC100S Intro to Data Science . Please follow this link and sign up using your Berea email and your real name.       Main screen with IntroToDataScience tab open. The window open read Welcome to IntroToDataScience.     The Console is open with the \"greater than\" sign highlighted in red at the bottom of the generic R Version text.       Notice near the bottom of the screenshot a greater than (\">\") symbol. This is the command prompt: When R is running and it is the active application on your desktop, if you type a command it appears after the \">\" symbol. If you press the \"enter\" or \"return\" key, the command is sent to R for processing. When the processing is done, a result may appear just under the \">.\" When R is done processing, another command prompt (\">\") appears and R is ready for your next command.    The example of a console screen use with the comman line reading 1 + 1 expression and outputting [1] 2 in the next line.   In the screenshot, the user has typed \"1+1\" and pressed the enter key. The formula 1+1 is used by elementary school students everywhere to insult each other’s math skills, but R dutifully reports the result as 2. If you are a careful observer, you will notice that just before the 2 there is a \"1\" in brackets, like this: [1]. That [1] is a line number that helps to keep track of the results that R displays. Pretty pointless when only showing one line of results, but R likes to be consistent, so we will see quite a lot of those numbers in brackets as we dig deeper.    Example includes a console with a data set assigned to a variable myFamilyAges on which different methods are performed, including mean, sum, and range.   Remember the list of ages of family members from the About Data chapter? No? Well, here it is again: 43, 42, 12, 8, 5, for dad, mom, sis, bro, and the dog, respectively. We mentioned that this was a list of items, all of the same mode, namely \"integer.\" Remember that you can tell that they are OK to be integers because there are no decimal points and therefore nothing after the decimal point. Recalling that “c” stands for concatenate, we can create a vector of integers in r using the \"c()\" command. Take a look at the screenshot just above.  This is just about the last time that the whole screenshot from the R console will appear in the book. From here on out we will just look at commands and output.The first command line in the screenshot is exactly what appeared in an earlier chapter:  c(43, 42, 12, 8, 5)  You may notice that on the following line, R dutifully reports the vector that you just typed. After the line number \"[1]\", we see the list 43, 42, 12, 8, and 5. R \"echoes\" this list back to us, because we didn’t ask it to store the vector anywhere. In contrast, the next command line (also the same as in the previous chapter), says:  myFamAge <- c(43, 42, 12, 8, 5)  We have typed in the same list of numbers, but this time we have assigned it, using the left pointing arrow, into a storage area that we have named \"myFamAge.\" This time, R responds just with an empty command prompt. That’s why the third command line requests a report of what myFamAge contains (Look after the yellow \">\". The text in blue is what you should type.) This is a simple but very important tool. Any time you want to know what is in a data object in R, just type the name of the object and R will report it back to you. In the next command we begin to see the power of R:   sum(myFamAge)   This command asks R to add together all of the numbers in  myFamAge, which turns out to be 110 (you can check it yourself  if you want). This is perhaps a bit of a weird thing to do with the ages of family members, but it shows how with a very short and simple command you can unleash quite a bit of processing on your data. In the next line we ask for the \"mean\" (what non-data people call the average) of all of the ages and this turns out to be 22 years. The command right afterwards, called \"range,\" shows the lowest and highest ages in the list. Finally, just for fun, we tried to issue the command \"fish(myFamAge)\". Pretty much as you might expect, R does not contain a \"fish()\" function and so we received an error message to that effect. This shows another important principle for working with R: You can freely try things out at any time without fear of breaking anything. If R can’t understand what you want to accomplish, or you haven’t quite figured out how to do something, R will calmly respond with an error message and will not make any other changes until you give it a new command. The error messages from R are not always super helpful, but with some strategies that the book will discuss in future chapters you can break down the problem and figure out how to get R to do what you want.  Let’s take stock for a moment. First, you should definitely try all of the commands noted above on your own computer. You can read about the commands in this book all you want, but you will learn a lot more if you actually try things out. Second, if you try a command that is shown in these pages and it does not work for some reason, you should try to figure out why. Begin by checking your spelling and punctuation, because R is very persnickety about how commands are typed. Remember that capitalization matters in R: myFamAge is not the same as myFamAge. If you verify that you have typed a command just as you see in the book and it still does not work, try to go online and look for some help. There’s lots of help at Stack Overflow , at Zürich Seminar for Statistics , and also at Quick-R . If you can figure out what  went wrong on your own and you will probably learn something very valuable about working with R. Third, you should take a moment to experiment a bit with each new set of commands that you learn. For example, just using the commands discussed earlier in the chapter you could do this totally new thing:  myRange <- range(myFamAge)  What would happen if you did that command, and then typed \"myRange\" (without the double quotes) on the next command line to report back what is stored there ? What would you see? Then think about how that worked and try to imagine some other experiments that you could try. The more you experiment on your own, the more you will learn. Some of the best stuff ever invented for computers was the result of just experimenting to see what was possible. At this point, with just the few commands that you have already tried, you already know the following things about R (and about data):     How to use R in R blocks within R-Studio Cloud.      How to use the \"c()\" function. Remember that \"c\" stands for concatenate, which just means to join things together. You can put a list of items inside the parentheses, separated by commas.      That a vector is pretty much the most basic form of data storage in R, and that it consists of a list of items of the same type or mode.      That a vector can be stored in a named location using the assignment arrow (a left pointing arrow made of a dash and a less than symbol, like this: \"<-\").      That you can get a report of the data object that is in any named location just by typing that name in a command block.      That you can \"run\" a function, such as mean(), on a vector of numbers to transform them into something else. (The mean() function calculates the average, which is one of the most basic numeric summaries there is.)      That sum(), mean(), and range() are all legal functions in R whereas fish() is not.     In the next chapter we will move forward a step or two by starting to work with text and by combining our list of family ages with the names of the family members and some other information about them.  "
},
{
  "id": "using-r-in-r-studio-cloud-4",
  "level": "2",
  "url": "using-r-in-r-studio-cloud.html#using-r-in-r-studio-cloud-4",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "  Main screen with IntroToDataScience tab open. The window open read Welcome to IntroToDataScience.  "
},
{
  "id": "using-r-in-r-studio-cloud-5",
  "level": "2",
  "url": "using-r-in-r-studio-cloud.html#using-r-in-r-studio-cloud-5",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": "  The Console is open with the \"greater than\" sign highlighted in red at the bottom of the generic R Version text.  "
},
{
  "id": "using-r-in-r-studio-cloud-6",
  "level": "2",
  "url": "using-r-in-r-studio-cloud.html#using-r-in-r-studio-cloud-6",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": "   "
},
{
  "id": "using-r-in-r-studio-cloud-8",
  "level": "2",
  "url": "using-r-in-r-studio-cloud.html#using-r-in-r-studio-cloud-8",
  "type": "Figure",
  "number": "3.5.4",
  "title": "",
  "body": "  The example of a console screen use with the comman line reading 1 + 1 expression and outputting [1] 2 in the next line.  "
},
{
  "id": "using-r-in-r-studio-cloud-10",
  "level": "2",
  "url": "using-r-in-r-studio-cloud.html#using-r-in-r-studio-cloud-10",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": "  Example includes a console with a data set assigned to a variable myFamilyAges on which different methods are performed, including mean, sum, and range.  "
},
{
  "id": "chapter-challenge-1",
  "level": "1",
  "url": "chapter-challenge-1.html",
  "type": "Subsubsection",
  "number": "3.6",
  "title": "Chapter Challenge",
  "body": " Chapter Challenge  Using logic and online resources to get help if you need it, learn how to use the c() function to add another family member’s age on the end of the myFamAge vector.  Write and test a new function called MySamplingDistribution() that creates a sampling distribution of means from a numeric input vector. You will need to integrate your knowledge of creating new functions from this chapter with your knowledge of creating sampling distributions from the previous chapter in order to create a working function. Make sure to give careful thought about the parameters you will need to pass to your function and what kind of data object your function will return.  "
},
{
  "id": "ch3-sources",
  "level": "1",
  "url": "ch3-sources.html",
  "type": "Subsubsection",
  "number": "3.7",
  "title": "Sources",
  "body": " Sources      R (programming language)        Wikipedia: Joseph J. Allaire        R-packages        Using RStudio as a 'Front End' to the R Console        Welcome to a Little Book of R for Biomedical Statistics!        The Comprehensive R Archive Network        R Programming        Stack Overflow        Zürich Seminar for Statistics        Quick-R      "
},
{
  "id": "ch3-questions",
  "level": "1",
  "url": "ch3-questions.html",
  "type": "Subsubsection",
  "number": "3.8",
  "title": "Questions",
  "body": " Questions   Question: One common definition for the statistical mode is:     The sum of all values divided by the number of values.      The most frequently occurring value in the data.      The halfway point through the data.      The distance between the smallest value and the largest value.      R Functions Used in This Chapter      c() Concatenates data elements together into a vector      <- Assignment arrow e.g. myData <- 5 assigns the value of 5 to myData      sum() Adds data elements      range() Min value and max value      mean() The average     "
},
{
  "id": "ch3-questions-2",
  "level": "2",
  "url": "ch3-questions.html#ch3-questions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Question: "
},
{
  "id": "ch3-questions-4",
  "level": "2",
  "url": "ch3-questions.html#ch3-questions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "R Functions Used in This Chapter "
},
{
  "id": "ch3-terms",
  "level": "1",
  "url": "ch3-terms.html",
  "type": "Subsubsection",
  "number": "3.9",
  "title": "Terms",
  "body": " Terms     R      R-Studio      R Markdown      Console     "
},
{
  "id": "follow-the-data",
  "level": "1",
  "url": "follow-the-data.html",
  "type": "Subsubsection",
  "number": "4.1",
  "title": "Follow the Data",
  "body": " Follow the Data    An old adage in detective work is to, \"follow the money.\" In data science, one key to success is to \"follow the data.\" In most cases, a data scientist will not help to design an information system from scratch. Instead, there will be several or many legacy systems where data resides; a big part of the challenge to the data scientist lies in integrating those systems.    Hate to nag, but have you had a checkup lately? If you have been to the doctor for any reason you may recall that the doctor’s office is awash with data. First off, the doctor has loads of digital sensors, everything from blood pressure monitors to ultrasound machines, and all of these produce mountains of data. Perhaps of greater concern in this era is the debate about health insurance, making the doctor's office one of the big jumping off points for financial and insurance data. One of the notable \"features\" of the U.S. healthcare system is our most common method of healthcare delivery: paying by the procedure. When you experience a \"procedure\" at the doctor’s office, whether it is a consultation, an examination, a test, or something else, this initiates a chain of data events with far reaching consequences.  If your doctor is typical, the starting point of these events is a paper form. Have you ever looked at one of these in detail? Most of the form will be covered by a large matrix of procedures and codes. Although some of the better equipped places may use this form digitally on a tablet or other computer, paper forms are still ubiquitous. Somewhere either in the doctor’s office or at an outsourced service company, the data on the paper form are entered into a system that begins the insurance reimbursement and\/or billing process.  Where do these procedure data go? What other kinds of data (such as patient account information) may get attached to them in a subsequent step? What kinds of networks do these linked data travel over, and what kind of security do they have? How many steps are there in processing the data before they get to the insurance company? How does the insurance company process and analyze the data before issuing the reimbursement? How is the money \"trans  mitted\" once the insurance company’s systems have given approval to the reimbursement? These questions barely scratch the surface: there are dozens or hundreds of processing steps that we haven’t yet imagined.  It is easy to see from this example, that the likelihood of being able to throw it all out and start designing a better or at least more standardized system from scratch is nil. But what if you had the job of improving the efficiency of the system, or auditing the insurance reimbursements to make sure they were compliant with insurance records, or using the data to detect and predict outbreaks and epidemics, or providing feedback to consumers about how much they can expect to pay out of pocket for various procedures?  The critical starting point for your project would be to follow the data. You would need to be like a detective, finding out in a substantial degree of detail the content, format, senders, receivers, transmission methods, repositories, and users of data at each step in the process and at each organization where the data are processed or housed.  Fortunately there is an extensive area of study and practice called \"data modeling\" that provides theories, strategies, and tools to help with the data scientist’s goal of following the data. These ideas started in earnest in the 1970s with the introduction by computer scientist Ed Yourdon of a methodology called Data Flow Diagrams. A more contemporary approach, that is strongly linked with the practice of creating relational databases, is called the entity relationship model. Professionals using this model develop Entity Relationship Diagrams (ERDs) that describe the structure and movement of data in a system.  Entity-relationship modeling occurs at different levels ranging from an abstract conceptual level to a physical storage level. At the conceptual level an entity is an object or thing, usually something in the real world. In the doctor’s office example, one important \"object\" is the patient. Another entity is the doctor. The patient and the doctor are linked by a relationship: in modern health care lingo this is the \"provider\" relationship. If the patient is Mr. X and the doctor is Dr. Y, the provider relationship provides a bidirectional link:     Dr. Y is the provider for Mr. X      Mr. X’s provider is Dr. Y     Naturally there is a range of data that can represent Mr. X: name address, age, etc. Likewise, there is data that represents Dr. Y’s years of experience as a doctor, specialty areas, certifications, licenses. Importantly, there is also a chunk of data that represents the linkage between X and Y, and this is the relationship.  Creating an ERD requires investigating and enumerating all of the entities, such as patients and doctors, as well as all of the relationships that may exist among them. As the beginning of the chapter suggested, this may have to occur across multiple organizations (e.g., the doctor’s office and the insurance company) depending upon the purpose of the information system that is being designed. Eventually, the ERDs must become detailed enough that they can serve as a specification for the physical storage in a database.  In an application area like health care, there are so many choices for different ways of designing the data that it requires some experience and possibly some \"art\" to create a workable system. Part of  the art lies in understanding the users’ current information needs and anticipating how those needs may change in the future. If an organization is redesigning a system, adding to a system, or creating brand new systems, they are doing so in the expectation of a future benefit. This benefit may arise from greater efficiency, reduction of errors\/inaccuracies, or the hope of providing a new product or service with the enhanced information capabilities.  Whatever the goal, the data scientist has an important and difficult challenge of taking the methods of today including paper forms and manual data entry to imagine the methods of tomorrow. Follow the data!  In the next chapter we look at one of the most common and most useful ways of organizing data, namely in a rectangular structure that has rows and columns. This rectangular arrangement of data appears in spreadsheets and databases that are used for a variety of applications. Understanding how these rows and columns are organized is critical to most tasks in data science.  "
},
{
  "id": "sources-3",
  "level": "1",
  "url": "sources-3.html",
  "type": "Subsubsection",
  "number": "4.2",
  "title": "Sources",
  "body": " Sources     Data modeling      Entity Relationship Diagram     "
},
{
  "id": "rows-and-columns",
  "level": "1",
  "url": "rows-and-columns.html",
  "type": "Section",
  "number": "5.1",
  "title": "Rows and Columns",
  "body": " Rows and Columns    One of the most basic and widely used methods of representing data is to use rows and columns, where each row is a case or instance and each column is a variable and attribute. Most spreadsheets arrange their data in rows and columns, although spreadsheets don’t usually refer to these as cases or variables. R represents rows and columns in an object called a Data Frame.    Although we live in a three dimensional world, where a box of cereal has height, width, and depth, it is a sad fact of modern life that pieces of paper, chalkboards, whiteboards, and computer screens are still only two dimensional. As a result, most of the statisticians, accountants, computer scientists, and engineers who work with lots of numbers tend to organize them in rows and columns. There’s really no good reason for this other than it makes it easy to fill a rectangular piece of paper with numbers. Rows and columns can be organized any way that you want, but the most common way is to have the rows be \"cases\" or \"instances\" and the columns be \"attributes\" or \"variables.\" Take a look at this nice, two dimensional representation of rows and columns:      NAME  AGE  GENDER  WEIGHT    Dad  43  Male  188    Mom  42  Female  136    Sis  12  Female  83    Bro  8  Male  61    Dog  5  Female  44     Pretty obvious what’s going on, right? The top line, in bold, is not really part of the data. Instead, the top line contains the attribute or variable names. Note that computer scientists tend to call them attributes while statisticians call them variables. Either term is OK. For example, age is an attribute that every living thing has, and you could count it in minutes, hours, days, months, years, or other units of time. Here we have the Age attribute calibrated in years. Technically speaking, the variable names in the top line are \"meta data\" or what you could think of as data about data. Imagine how much more difficult it would be to understand what was going on in that table without the metadata. There’s a lot of different kinds of metadata: variable names are just one simple type of metadata.  So if you ignore the top row, which contains the variable names, each of the remaining rows is an instance or a case. Again, computer scientists may call them instances, and statisticians may call them cases, but either term is fine. The important thing is that each row refers to an actual thing. In this case all of our things are living creatures in a family. You could think of the Name column as \"case labels\" in that each one of these labels refers to one and only one row in our data. Most of the time when you are working with a large dataset, there is a number used for the case label, and that number is unique for each case (in other words, the same number would never appear in more than one row). Computer scientists sometimes refer to this column of unique numbers as a \" key .\" A key is very useful particularly for matching things up from different data sources, and we will run into this idea again a bit later. For now, though, just take note that the \"Dad\" row can be distinguished from the \"Bro\" row, even though they are both Male. Even if we added an \"Uncle\" row that had the same Age, Gender, and Weight as \"Dad\" we would still be able to tell the two rows apart because one would have the name \"Dad\" and the other would have the name \"Uncle.\"  One other important note: Look how each column contains the same kind of data all the way down. For example, the Age column is all numbers. There’s nothing in the Age column like \"Old\" or \"Young.\" This is a really valuable way of keeping things organized. After all, we could not run the mean() function on the Age column if it contained a little piece of text, like \"Old\" or \"Young.\" On a related note, every cell (that is an intersection of a row and a column, for example, Sis’s Age) contains just one piece of information. Although a spreadsheet or a word processing program might allow us to put more than one thing in a cell, a real data handling program will not. Finally, see that every column has the same number of entries, so that the whole forms a nice rectangle. When statisticians and other people who work with databases work with a dataset, they expect this rectangular arrangement.  Now let’s figure out how to get these rows and columns into R. One thing you will quickly learn about R is that there is almost always more than one way to accomplish a goal. Sometimes the quickest or most efficient way is not the easiest to understand. In this case we will build each column one by one and then join them together into a single data frame. This is a bit labor intensive, and not the usual way that we would work with a data set, but it is easy to understand. First, run this command to make the column of names:  myFamName <- c(\"Dad\",\"Mom\",\"Sis\",\"Bro\",\"Dog\")  One thing you might notice is that every name is placed within double quotes. This is how you signal to R that you want it to treat something as a string of characters rather than the name of a storage location. If we had asked R to use Dad instead of \"Dad\" it would have looked for a storage location (a data object) named Dad. Another thing to notice is that the commas separating the different values are outside of the double quotes. If you were writing a regular sentence this is not how things would look, but for computer programming the comma can only do its job of separating the different values if it is not included inside the quotes. Once you have typed the line above, remember that you can check the contents of myFamName by typing it on the next command line:  myFamName  The output should look like this:  [1] \"Dad\" \"Mom\" \"Sis\" \"Bro\" \"Dog\"  Next, you can create a vector of the ages of the family members, like this:  myFamAge <- c(43, 42, 12, 8, 5)  Note that this is exactly the same command we used in the last chapter, so if you have kept R running between then and now you would not even have to retype this command because myFamAge would still be there. Actually, if you closed R since working the examples from the last chapter you will have been prompted to \"save the workspace\" and if you did so, then R restored all of the data objects you were using in the last session. You can always check by typing myFamAge on a blank command line. The output should look like this:  [1] 43 42 12 8 5  Hey, now you have used the c() function and the assignment arrow to make myFamName and myFamAge. If you look at the data table earlier in the chapter you should be able to figure out the commands for creating myFamGend and myFamWeight. In case you run into trouble, these commands also appear on the next page, but you should try to figure them out for yourself before you turn the page. In each case after you type the command to create the new data object, you should also type the name of the data object at the command line to make sure that it looks the way it should. Four variables, each one with five values in it. Two of the variables are character data and two of the variables are integer data. Here are those two extra commands in case you need them:  myFamGend <- c(\"Male\",\"Female\",\"Female\",\"Male\",\"Female\")  myFamWeight <- c(188,136,83,61,44)  Now we are ready to tackle the data.frame. In R, a data.frame is a list of columns, where each element in the list is a vector. Each vector is the same length, which is how we get our nice rectangular row and column setup, and generally each vector also has its own name. The command to make a data frame is very simple:  myFam <- data.frame(myFamName, +  myFamAge, myFamGend, myFamWeight)  Look out! We’re starting to get commands that are long enough that they break onto more than one line. The + at the end of the first line tells R to wait for more input on the next line before trying to process the command. If you want to, you can type the whole thing as one line in R, but if you do, just leave out the plus sign. Anyway, the data.frame() function makes a dataframe from the four vectors that we previously typed in. Notice that we have also used the assignment arrow to make a new stored location where R puts the data frame. This new data object, called myFam, is our dataframe. Once you have gotten that command to work, type myFam at the command line to get a report back of what the data frame contains. Here’s the output you should see:  myFamName myFamAge myFamGend myFamWeight  1 Dad 43 Male 188  2 Mom 42 Female 136  3 Sis 12 Female 83  4 Bro 8 Male 61  5 Dog 5 Female 44    This is an example of a created Data Frame in the console that is printed after running the name of the data frame in teh command line.   This looks great. Notice that R has put row numbers in front of each row of our data. These are different from the output line numbers we saw in brackets before, because these are actual \"indices\" into the data frame. In other words, they are the row numbers that R uses to keep track of which row a particular piece of data is in.  With a small data set like this one, only five rows, it is pretty easy just to take a look at all of the data. But when we get to a bigger data set this won’t be practical. We need to have other ways of summarizing what we have. R’s str() method stands for str ucture and compactly reveals the type of \"structure\" that R has used to store a data object.    This is an example of what is output in the console after str function was performed on the existing dataframe.   > str(myFam)  'data.frame': 5 obs. of 4 variables:  $ myFamName : Factor w\/ 5 levels \"Bro\",\"Dad\",\"Dog\",..: 2 4 5 1 3  $ myFamAge : num 43 42 12 8 5  $ myFamGend: Factor w\/ 2 levels  \"Female\",\"Male\": 2 1 1 2 1  $ myFamWeight: num 188 136 83 61 44  Take note that for the first time, the example shows the command prompt \">\" in order to differentiate the command from the output that follows. You don’t need to type this: R provides it whenever it is ready to receive new input. From now on in the book, there will be examples of R commands and output that are mixed together, so always be on the lookout for \">\" because the command after that is what you have to type.  OK, so the function \"str()\" reveals the structure of the data object that you name between the parentheses. In this case we pretty well knew that myFam was a data frame because we just set that up in a previous command. In the future, however, we will run into many situations where we are not sure how R has created a data object, so it is important to know str() so that you can ask R to report what an object is at any time.  In the first line of output we have the confirmation that myFam is a data frame as well as an indication that there are five observations (\"obs.\" which is another word that statisticians use instead of cases or instances) and four variables. After that first line of output, we have four sections that each begin with \"$\". For each of the four variables, these sections describe the component columns of the myFam dataframe object.  Each of the four variables has a \"mode\" or type that is reported by R right after the colon on the line that names the variable:  $ myFamGend : Factor w\/ 2 levels  For example, myFamGend is shown as a \"Factor.\" In the terminology that R uses, Factor refers to a special type of label that can be used to identify and organize groups of cases. R has organized these labels alphabetically and then listed out the first few cases (because our dataframe is so small it actually is showing us all of the cases). For myFamGend we see that there are two \"levels,\" meaning that there are two different options: female and male.  R assigns a number, starting with one, to each of these levels, so every case that is \"Female\" gets assigned a 1 and every case that is \"Male\" gets assigned a 2 (because Female comes before Male in the alphabet, so Female is the first Factor label, so it gets a 1). If you have your thinking cap on, you may be wondering why we started out by typing in small strings of text, like \"Male,\" but then R has gone ahead and converted these small pieces of text into numbers that it calls \"Factors.\" The reason for this lies in the statistical origins of R. For years, researchers have done things like calling an experimental group \"Exp\" and a control group \"Ctl\" without intending to use these small strings of text for anything other than labels. So R assumes, unless you tell it otherwise, that when you type in a short string like \"Male\" that you are referring to the label of a group, and that R should prepare for the use of Male as a \"Level\" of a \"Factor.\" When you don’t want this to happen you can instruct R to stop doing this with an option on the data.frame() function: stringsAsFactors=FALSE. We will look with more detail at options and defaults a little later on.  Phew, that was complicated! By contrast, our two numeric variables, myFamAge and myFamWeight, are very simple. You can see that after the colon the mode is shown as \"num\" (which stands for numeric) and that the first few values are reported:  $ myFamAge : num 43 42 12 8 5  Putting it all together, we have pretty complete information about the myFam dataframe and we are just about ready to do some more work with it. We have seen firsthand that R has some pretty cryptic labels for things as well as some obscure strategies for converting this to that. R was designed for experts, rather than novices, so we will just have to take our lumps so that one day we can be experts too.  Next, we will examine another very useful function called summary()which provides some overlapping information to str() but also goes a little bit further, particularly with numeric variables.  Here’s what we get:  > summary(myFam)  myFamName myFamAge  Bro: 1 Min. : 5  Dad: 1 1st Qu. : 8  Dog: 1 Median : 12  Mom: 1 Mean : 22  Sis: 1 3rd Qu. : 42  myFamGend myFamWeight  Female : 3 Min. : 44  Male : 2 1st Qu. : 61.0   Median : 83.0  Mean : 102.4  3rd Qu. : 136.0  Max : 188.0     This is an example of what the console outputs when Summmary function is performed on an existing data frame.   In order to fit on the page properly, these columns have been reorganized a bit. The name of a column\/variable, sits up above the information that pertains to it, and each block of information is independent of the others (so it is meaningless, for instance, that \"Bro: 1\" and \"Min.\" happen to be on the same line of output). Notice, as with str(), that the output is quite different depending upon whether we are talking about a Factor, like myFamName or myFamGend, versus a numeric variable like myFamAge and myFamWeight. The columns for the Factors list out a few of the Factor names along with the number of occurrences of cases that are coded with that factor. So for instance, under myFamGend it shows three females and two males. In contrast, for the numeric variables we get five different calculated quantities that help to summarize the variable. There’s no time like the present to start to learn about what these are, so here goes:     \"Min.\" refers to the minimum or lowest value among all the cases. For this dataframe, 5 is the age of the dog and it is the lowest age of all of the family members.      \"1st Qu.\" refers to the dividing line at the top of the first quartile. If we took all the cases and lined them up side by side in order of age (or weight) we could then divide up the whole into four groups, where each group had the same number of observations.         1ST QUARTILE  2ND QUARTILE  3RD QUARTILE  4TH QUARTILE    25% of cases with the smallest values here  25% of cases just below the median here  25% of cases just above the mean here  25% of cases with the largest values here     Just like a number line, the smallest cases would be on the left with the largest on the right. If we’re looking at myFamAge, the leftmost group, which contains one quarter of all the cases, would start with five on the low end (the dog) and would have eight on the high end (Bro). So the \"first quartile\" is the value of age (or another variable) that divides the first quarter of the cases from the other three quarters. Note that if we don’t have a number of cases that divides evenly by four, the value is an approximation.      Median refers to the value of the case that splits the whole group in half, with half of the cases having higher values and half having lower values. If you think about it a little bit, the median is also the dividing line that separates the second quartile from the third quartile.       Mean , as we have learned before, is the numeric average of all of the values. For instance, the average age in the family is reported as 22.      • \" 3rd Qu. \" is the third quartile. If you remember back to the first quartile and the median, this is the third and final dividing line that splits up all of the cases into four equal sized parts. You may be wondering about these quartiles and what they are useful for. Statisticians like them because they give a quick sense of the shape of the distribution. Everyone has the experience of sorting and dividing things up pieces of pizza, playing cards into hands, a bunch of players into teams and it is easy for most people to visualize four equal sized groups and useful to know how high you need to go in age or weight (or another variable) to get to the next dividing line between the groups.      Finally, \" Max \" is the maximum value and as you might expect displays the highest value among all of the available cases. For example, in this dataframe Dad has the highest weight: 188. Seems like a pretty trim guy.     Just one more topic to pack in before ending this chapter: How to access the stored variables in our new dataframe. R stores the dataframe as a list of vectors and we can use the name of the dataframe together with the name of a vector to refer to each one using the \"$\" to connect the two labels like this:  > myFam$myFamAge  [1] 43 42 12 8 5  If you’re alert you might wonder why we went to the trouble of typing out that big long thing with the $ in the middle, when we could have just referred to \"myFamAge\" as we did earlier when we were setting up the data. Well, this is a very important point. When we created the myFam dataframe, we copied all of the information from the individual vectors that we had before into a brand new storage space. So now that we have created the myFam dataframe, myFam$myFamAge actually refers to a completely separate (but so far identical) vector of values. You can prove this to yourself very easily, and you should, by adding some data to the original vector, myFamAge:  > myFamAge <- c(myFamAge, 11)  > myFamAge  [1] 43 42 12 8 5 11  > myFam$myFamAge  [1] 43 42 12 8 5    This is an example that showcases a new value being added to an independent variable named myFamAge. After, the example prints both myFamAge and myFamAge that was stored in the data frame. The variable have differing values.   Look very closely at the five lines above. In the first line, we use the c() command to add the value 11 to the original list of ages that we had stored in myFamAge (perhaps we have adopted an older cat into the family). In the second line we ask R to report what the vector myFamAge now contains. Dutifully, on the third line above, R reports that myFamAge now contains the original five values and the new value of 11 on the end of the list. When we ask R to report myFam$myFamAge, however, we still have the original list of five values only. This shows that the dataframe and its component columns\/vectors is now a completely independent piece of data. We must be very careful, if we established a dataframe that we want to use for subsequent analysis, that we don’t make a mistake and keep using some of the original data from which we assembled the dataframe.  Here’s a puzzle that follows on from this question. We have a nice dataframe with five observations and four variables. This is a rectangular shaped data set, as we discussed at the beginning of the chapter. What if we tried to add on a new piece of data on the end of one of the variables? In other words, what if we tried something like this command:  myFam$myFamAge <- c(myFam$myFamAge, 11)  If this worked, we would have a pretty weird situation: The variable in the dataframe that contained the family members’ ages would all of a sudden have one more observation than the other variables: no more perfect rectangle! Try it out and see what happens. The result helps to illuminate how R approaches situations like this.  So what new skills and knowledge do we have at this point? Here are a few of the key points from this chapter:     In R, as in other programs, a vector is a list of elements\/things that are all of the same kind, or what R refers to as a mode. For example, a vector of mode \"numeric\" would contain only numbers.      Statisticians, database experts and others like to work with rectangular datasets where the rows are cases or instances and the columns are variables or attributes.      In R, one of the typical ways of storing these rectangular structures is in an object known as a dataframe. Technically speaking a dataframe is a list of vectors where each vector has the exact same number of elements as the others (making a nice rectangle).      In R, the data.frame() function organizes a set of vectors into a dataframe. A dataframe is a conventional, rectangular shaped data object where each column is a vector of uniform mode and having the same number of elements as the other columns in the dataframe. Data is copied from the original source vectors into new storage space. The variables\/columns of the dataframe can be accessed using \"$\" to connect the name of the dataframe to the name of the variable\/column.      • The str() and summary() functions can be used to reveal the structure and contents of a dataframe (as well as of other data objects stored by R). The str() function shows the structure of a data object, while summary() provides numerical summaries of numeric variables and overviews of non-numeric variables.      A factor is a labeling system often used to organize groups of cases or observations. In R, as well as in many other software programs, a factor is represented internally with a numeric ID number, but factors also typically have labels like \"Male\" and \"Female\" or \"Experiment\" and \"Control.\" Factors always have \"levels,\" and these are the different groups that the factor signifies. For example, if a factor variable called Gender codes all cases as either \"Male\" or \"Female\" or \"Other\" then that factor has exactly three levels.         Quartiles are a division of a sorted vector into four evenly sized groups. The first quartile contains the lowest-valued elements, for example the lightest weights, whereas the fourth quartile contains the highest-valued items. Because there are four groups, there are three dividing lines that separate them. The middle dividing line that splits the vector exactly in half is the median. The term \"first quartile\" often refers to the dividing line to the left of the median that splits up the lower two quarters and the value of the first quartile is the value of the element of the vector that sits right at that dividing line. Third quartile is the same idea, but to the right of the median and splitting up the two higher quarters.       Min and max are often used as abbreviations for minimum and maximum and these are the terms used for the highest and lowest values in a vector. Bonus: The \"range\" of a set of numbers is the maximum minus the minimum.      The mean is the same thing that most people think of as the average. Bonus: The mean and the median are both measures of what statisticians call \"central tendency.\"     "
},
{
  "id": "rows-and-columns-4",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-4",
  "type": "Table",
  "number": "5.1.1",
  "title": "",
  "body": "    NAME  AGE  GENDER  WEIGHT    Dad  43  Male  188    Mom  42  Female  136    Sis  12  Female  83    Bro  8  Male  61    Dog  5  Female  44    "
},
{
  "id": "rows-and-columns-6",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "key "
},
{
  "id": "rows-and-columns-31",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-31",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": "  This is an example of a created Data Frame in the console that is printed after running the name of the data frame in teh command line.  "
},
{
  "id": "rows-and-columns-33",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "str "
},
{
  "id": "rows-and-columns-34",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-34",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": "  This is an example of what is output in the console after str function was performed on the existing dataframe.  "
},
{
  "id": "rows-and-columns-46",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ": "
},
{
  "id": "rows-and-columns-65",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-65",
  "type": "Figure",
  "number": "5.1.4",
  "title": "",
  "body": "  This is an example of what the console outputs when Summmary function is performed on an existing data frame.  "
},
{
  "id": "rows-and-columns-68",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-68",
  "type": "Table",
  "number": "5.1.5",
  "title": "",
  "body": "    1ST QUARTILE  2ND QUARTILE  3RD QUARTILE  4TH QUARTILE    25% of cases with the smallest values here  25% of cases just below the median here  25% of cases just above the mean here  25% of cases with the largest values here    "
},
{
  "id": "rows-and-columns-70",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-70",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Median Mean 3rd Qu. Max "
},
{
  "id": "rows-and-columns-74",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-74",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "copied "
},
{
  "id": "rows-and-columns-80",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-80",
  "type": "Figure",
  "number": "5.1.6",
  "title": "",
  "body": "  This is an example that showcases a new value being added to an independent variable named myFamAge. After, the example prints both myFamAge and myFamAge that was stored in the data frame. The variable have differing values.  "
},
{
  "id": "rows-and-columns-86",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-86",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factor "
},
{
  "id": "rows-and-columns-87",
  "level": "2",
  "url": "rows-and-columns.html#rows-and-columns-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quartiles Min max mean "
},
{
  "id": "chapter-challenge-2",
  "level": "1",
  "url": "chapter-challenge-2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Chapter Challenge",
  "body": " Chapter Challenge  Create another variable containing information about family members (for example, each family member’s estimated IQ; you can make up the data). Take that new variable and put it in the existing myFam dataframe. Rerun the summary() function on myFam to get descriptive information on your new variable.   Sources       Central Tendency        Median        Relational Model        Impatient R Translation      "
},
{
  "id": "chapter-challenge-2-3",
  "level": "2",
  "url": "chapter-challenge-2.html#chapter-challenge-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sources "
},
{
  "id": "r-functions-used-in-this-chapter",
  "level": "1",
  "url": "r-functions-used-in-this-chapter.html",
  "type": "Section",
  "number": "5.3",
  "title": "R Functions Used in This Chapter",
  "body": " R Functions Used in This Chapter     c() Concatenates data elements together to create a vector      <- Assignment arrow      data.frame() Makes a dataframe from separate vectors      str() Reports the structure of a data object      summary() Reports data modes\/types and a data overview      Question: What is the name of the data object that R uses to store a rectangular dataset of cases and variables?     A list      A mode      A vector      A dataframe     "
},
{
  "id": "r-functions-used-in-this-chapter-3",
  "level": "2",
  "url": "r-functions-used-in-this-chapter.html#r-functions-used-in-this-chapter-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Question: "
},
{
  "id": "beer-farms-and-peas",
  "level": "1",
  "url": "beer-farms-and-peas.html",
  "type": "Subsubsection",
  "number": "6.1",
  "title": "Beer, Farms, and Peas",
  "body": " Beer, Farms, and Peas     Peas on x-y axes    Many of the simplest and most practical methods for summarizing collections of numbers come to us from four guys who were born in the 1800s at the start of the industrial revolution. A considerable amount of the work they did was focused on solving real world problems in manufacturing and agriculture by using data to describe and draw inferences from what they observed.    The end of the 1800s and the early 1900s were a time of astonishing progress in mathematics and science. Given enough time, paper, and pencils, scientists and mathematicians of that age imagined that just about any problem facing humankind including the limitations of people themselves could be measured, broken down, analyzed, and rebuilt to become more efficient. Four Englishmen who epitomized both this scientific progress and these idealistic beliefs were Francis Galton, Karl Pearson, William Sealy Gosset, and Ronald Fisher.  First on the scene was Francis Galton, a half-cousin to the more widely known Charles Darwin, but quite the intellectual force himself. Galton was an English gentleman of independent means who studied Latin, Greek, medicine, and mathematics, and who made a name for himself as an African explorer. He is most widely known as a proponent of \"eugenics,\" and is credited with coining the term. Eugenics is the idea that the human race could be improved through selective breeding. Galton studied heredity in peas, rabbits, and people and concluded that certain people should be paid to get married and have children because their offspring would improve the human race. These ideas were later horribly misused in the 20th century, most notably by the Nazis as a justification for killing people because they belonged to supposedly inferior races. Setting eugenics aside, however, Galton made several notable and valuable contributions to mathematics and statistics, in particular illuminating two basic techniques that are widely used today: correlation and regression.  For all his studying and theorizing, Galton was not an outstanding mathematician, but he had a junior partner, Karl Pearson, who is often credited with founding the field of mathematical statistics.  Pearson refined the math behind correlation and regression and did a lot else besides to contribute to our modern abilities to manage numbers. Like Galton, Pearson was a proponent of eugenics, but he also is credited with inspiring some of Einstein’s thoughts about relativity and was an early advocate of women’s rights.  Next to the statistical party was William Sealy Gosset, a wizard at both math and chemistry. It was probably the latter expertise that led the Guinness Brewery in Dublin Ireland to hire Gosset after college. As a forward looking business, the Guinness brewery was on the lookout for ways of making batches of beer more consistent in quality. Gosset stepped in and developed what we now refer to as small sample statistical techniques, a way of generalizing from the results of a relatively few observations. Of course, brewing a batch of beer is a time consuming and expensive process, so in order to draw conclusions from experimental methods applied to just a few batches, Gosset had to figure out the role of chance in determining how a batch of beer had turned out. Guinness frowned upon academic publications, so Gosset had to publish his results under the modest pseudonym, \"Student.\" If you ever hear someone discussing the \"Student’s t-Test,\" that is where the name came from.  Last but not least among the born-in-the-1800s bunch was Ronald Fisher, another mathematician who also studied the natural sciences, in his case biology and genetics. Unlike Galton, Fisher was not a gentleman of independent means, in fact, during his early married life he and his wife struggled as subsistence farmers. One of Fisher’s professional postings was to an agricultural research farm called Rothhamsted Experimental Station. Here, he had access to data about variations in crop yield that led to his development of an essential statistical technique known as the analysis of variance. Fisher also pioneered the area of experimental design, which includes matters of factors, levels, experimental groups, and control groups that we noted in the previous chapter.  Of course, these four are certainly not the only 19th and 20th century mathematicians to have made substantial contributions to practical statistics, but they are notable with respect to the applications of mathematics and statistics to the other sciences (and \"Beer, Farms, and Peas\" makes a good chapter title as well).  One of the critical distinctions woven throughout the work of these four is between the \"sample\" of data that you have available to analyze and the larger \"population\" of possible cases that may or do exist. When Gosset ran batches of beer at the brewery, he knew that it was impractical to run every possible batch of beer with every possible variation in recipe and preparation. Gosset knew that he had to run a few batches, describe what he had found and then generalize or infer what might happen in future batches. This is a fundamental aspect of working with all types and amounts of data: Whatever data you have, there’s always more out there. There’s data that you might have collected by changing the way things are done or the way things are measured. There’s future data that hasn’t been collected yet and might never be collected. There’s even data that we might have gotten using the exact same strategies we did use, but that would have come out subtly different just due to randomness. Whatever data you have, it is just a snapshot or \"sample\" of what might be out there. This leads us to the conclusion that we can never, ever 100% trust the data we have. We must always hold back and keep in mind that there is always uncertainty in data. A lot of the power and goodness in statistics comes from the capabilities that people like Fisher developed to help us characterize and quantify that uncertainty and for us to know when to guard against putting too much stock in what a sample of data have to say. So remember that while we can always describe the sample of data we have, the real trick is to infer what the data may mean when generalized to the larger population of data that we don’t have. This is the key distinction between descriptive and inferential statistics.  We have already encountered several descriptive statistics in previous chapters, but for the sake of practice here they are again, this time with the more detailed definitions:     The mean (technically the arithmetic mean), a measure of central tendency that is calculated by adding together all of the observations and dividing by the number of observations.      The median , another measure of central tendency, but one that cannot be directly calculated. Instead, you make a sorted list of all of the observations in the sample, then go halfway up that list. Whatever the value of the observation is at the halfway point, that is the median.      The range , which is a measure of \"dispersion\" how spread out a bunch of numbers in a sample are calculated by subtracting the lowest value from the highest value.     To this list we should add three more that you will run into in a variety of situations:     The mode , another measure of central tendency. The mode is the value that occurs most often in a sample of data. Like the median, the mode cannot be directly calculated. You just have to count up how many of each number there are and then pick the category that has the most.      The variance , a measure of dispersion. Like the range, the variance describes how spread out a sample of numbers is. Unlike the range, though, which just uses two numbers to calculate dispersion, the variance is obtained from all of the numbers through a simple calculation that compares each number to the mean. If you remember the ages of the family members from the previous chapter and the mean age of 22, you will be able to make sense out of the following table:         WHO  AGE  AGE-MEAN  (AGEMEAN)    Dad  43  43-22=21  21*21=441    Mom  42  42-22=20  20*20=400    Sis  12  12-22=-10  -10*-10=100    Bro  8  8-22=-14  -14*-14=196    Dog  5  5-22=-17  -17*-17=289      Total:  1426      Total\/4:  356.5     This table shows the calculation of the variance, which begins by obtaining the \"deviations\" from the mean and then \"squares\" them (multiply each times itself) to take care of the negative deviations (for example, -14 from the mean for Bro). We add up all of the squared deviations and then divide by the number of observations to get a kind of \"average squared deviation.\" Note that it was not a mistake to divide by 4 instead of 5 the reasons for this will become clear later in the book when we examine the concept of degrees of freedom. This result is the variance , a very useful mathematical concept that appears all over the place in statistics. While it is mathematically useful, it is not too nice to look at. For instance, in this example we are looking at the 356.5 squared-years of deviation from the mean. Who measures anything in squared years? Squared feet maybe, but that’s a different discussion. So, to address this weirdness, statisticians have also provided us with:     The standard deviation , another measure of dispersion, and a cousin to the variance. The standard deviation is simply the square root of the variance, which puts us back in regular units like \"years.\" In the example above, the standard deviation would be about 18.88 years (rounding to two decimal places, which is plenty in this case).      Standard deviation has a complicated formula, but you can think of it as “the average distance from the mean.” In the example above, the average distance to the mean is about 18.88 years.      Intuitively, you can think about both the standard deviation and the variance as measuring how spread out the data is. When these numbers are 0 or very small compared to the mean, the data is not very spread out.     Now let’s have R calculate some statistics for us:  > var(myFam$myFamAge)  [1] 356.5  > sd(myFam$myFamAge)  [1] 18.88121  Note that these commands carry on using the data used in the previous chapter, including the use of the $ to address variables within a dataframe. If you do not have the data from the previous chapter you can also do this:  > var(c(43,42,12,8,5))  [1] 356.5  > sd(c(43,42,12,8,5))  [1] 18.88121  This is a pretty boring example, though, and not very useful for the rest of the chapter, so here’s the next step up in looking at data. We will use the Windows or Mac clipboard to cut and paste a larger data set into R. Go to the U.S. Census website where they have stored population data: US Census Bureau: State Population Totals: 2010-2019   Assuming you have a spreadsheet program available, click on the XLS link for \" Annual Estimates of the Resident Population for the United States, Regions, States, and Puerto Rico: April 1, 2010 to July 1, 2019 (NST-EST2019-01) \" When the spreadsheet is open, select the population estimates for the fifty states. The first few looked like this in the 2011 data:  .Alabama 4,799,069  .Alaska 722,128  .Arizona 6,472,643  .Arkansas 2,940,667  Before you copy the numbers, take out the commas by switching the cell type to \"General.\" This can usually be accomplished under the Format menu, but you might also have a toolbar button to do the job.      Generally, you want to keep the names of columns for the data, however, for the purposes of learning just delete everything and only keep population data for the 50 states (and Washington DC). You should only have the numeric data, occupying a total of 51 lines:      Then open R Studio Cloud and Exploring Populations Homework. In the bottom right window click on the Upload button:      Select the XSL file that you downloaded and edited and upload it. It should now appear in the Files window. Next, click on the file and select Import Dataset  You might be prompted to a page that requires installation of extensions to your Cloud environment. Click yes.  After installation of readxl and Rcpp packages for smooth integration of XSL files in our environment, you will be prompted to the Import Excel Data window. There are three changes that you will need to make 1. Change the name of the variable to which you are assigning the data from this excel sheet from its original name to USstatePops. 2. Uncheck “First Row as Names” box as we do not want the population of Alabama over different years to become the name for our columns 3. (optional) Uncheck Open Data Viewer box unless of course you are curious to see the Data Viewer window.      This is what the Import Excel Data window should look like after:      Nice work, you have successfully uploaded your first data set into R Studio Cloud.  Only the first three observations are shown in order to save space on this page. Your output R should show the whole list.  This would be a great moment to practice your skills from the previous chapter by using the str() and summary() functions on our new data object called USstatePops. Did you notice anything interesting from the results of these functions? One thing you might have noticed is that there are 51 observations instead of 50. Can you guess why? If not, go back and look at your original data from the spreadsheet or the U.S. Census site. The other thing you may have noticed is that USstatePops is a dataframe, and not a plain vector of numbers. You can actually see this in the output above: In the second command line where we request that R reveal what is stored in USstatePops, it responds with a column topped by the designation \"V1\" or “...1”. Because we did not give R any information about the numbers it read in from the clipboard, it called them \"V1\" or “...1”, short for Variable One, by default. So anytime we want to refer to our list of population numbers we actually have to use the name USstatePops$V1. If this sounds unfamiliar, take another look at the previous \"Rows and Columns\" chapter for more information on addressing the columns in a dataframe.  Now we’re ready to have some fun with a good sized list of numbers. Here are the basic descriptive statistics on the population of the states:  > mean(USstatePops$...1)  [1] 6053834  > median(USstatePops$...1)  [1] 4339367  > mode(USstatePops$...1)  [1] \"numeric\"  > var(USstatePops$...1)  [1] 4.656676e+13  > sd(USstatePops$...1)  [1] 6823984  Some great summary information there, but wait, a couple things have gone awry:     The mode() function has returned the data type of our vector of numbers instead of the statistical mode. This is weird but true: the basic R package does not have a statistical mode function! This is partly due to the fact that the mode is only useful in a very limited set of situations, but we will find out in later chapters how add-on packages can be used to get new functions in R including one that calculates the statistical mode.      The variance is reported as 4.656676e+13. This is the first time that we have seen the use of scientific notation in R. If you haven’t seen this notation before, the way you interpret it is to imagine 4.656676 multiplied by 10,000,000,000,000 (also known as 10 raised to the 13 th power). You can see that this is ten trillion, a huge and unwieldy number, and that is why scientific notation is used. If you would prefer not to type all of that into a calculator, another trick to see what number you are dealing with is just to move the decimal point 13 digits to the right.     Other than these two issues, we now know that the average population of a U.S. state is 6,053,834 with a standard deviation of 6,823,984. You may be wondering, though, what does it mean to have a standard deviation of almost seven million? The mean and standard deviation are OK, and they certainly are mighty precise, but for most of us, it would make much more sense to have a picture that shows the central tendency and the dispersion of a large set of numbers. So here we go. Run this command:  hist(USstatePops$...1)  Here’s the output you should get:    Histogram of USstatePops$V1    Histogram of USstatePops$...1   A histogram is a specialized type of bar graph designed to show \"frequencies.\" Frequencies means how often a particular value or range of values occurs in a dataset. This histogram shows a very interesting picture. There are nearly 30 states with populations under five million, another 10 states with populations under 10 million, and then a very small number of states with populations greater than 10 million. Having said all that, how do we glean this kind of information from the graph? First, look along the Y-axis (the vertical axis on the left) for an indication of how often the data occur. The tallest bar is just to the right of this and it is nearly up to the 30 mark. To know what this tall bar represents, look along the X-axis (the horizontal axis at the bottom) and see that there is a tick mark for every two bars. We see scientific notation under each tick mark. The first tick mark is 1e+07, which translates to 10,000,000. So each new bar (or an empty space where a bar would go) goes up by five million in population. With these points in mind it should now be easy to see that there are nearly 30 states with populations under five million.  If you think about presidential elections, or the locations of schools and businesses, or how a single U.S. state might compare with other countries in the world, it is interesting to know that there are two really giant states and then lots of much smaller states. Once you have some practice reading histograms, all of the knowledge is available at a glance.  On the other hand there is something unsatisfying about this diagram. With over forty of the states clustered into the first couple of bars, there might be some more details hiding in there that we would like to know about. This concern translates into the number of bars shown in the histogram. There are eight shown here, so why did R pick eight?  The answer is that the hist() function has an algorithm or recipe for deciding on the number of categories\/bars to use by default. The number of observations and the spread of the data and the amount of empty space there would be are all taken into account. Fortunately it is possible and easy to ask R to use more or fewer categories\/bars with the \"breaks\" parameter, like this:  hist(USstatePops$...1, breaks=20)    Histogram of USstatePops$V1    Histogram of USstatePops$...1   This gives us five bars per tick mark or about two million for each bar. So the new histogram above shows very much the same pattern as before: 15 states with populations under two million. The pattern that you see here is referred to as a distribution. This is a distribution that starts off tall on the left and swoops downward quickly as it moves to the right. You might call this a \"reverse-J\" distribution because it looks a little like the shape a J makes, although flipped around vertically. More technically this could be referred to as a Pareto distribution (named after the economist Vilfredo Pareto). We don’t have to worry about why it may be a Pareto distribution at this stage, but we can speculate on why the distribution looks the way it does. First, you can’t have a state with no people in it, or worse yet negative population. It just doesn’t make any sense. So a state has to have at least a few people in it, and if you look through U.S. history every state began as a colony or a territory that had at least a few people in it. On the other hand, what does it take to grow really large in population? You need a lot of land, first of all, and then a good reason for lots of people to move there or lots of people to be born there. So there are lots of limits to growth: Rhode Island is too small to have a bazillion people in it and Alaska, although it has tons of land, is too cold for lots of people to want to move there. So all states probably started small and grew, but it is really difficult to grow really huge. As a result we have a distribution where most of the cases are clustered near the bottom of the scale and just a few push up higher and higher. But as you go higher, there are fewer and fewer states that can get that big, and by the time you are out at the end, just shy of 40 million people, there’s only one state that has managed to get that big. By the way, do you know or can you guess what that humongous state is?  There are lots of other distribution shapes. The most common one that almost everyone has heard of is sometimes called the \"bell\" curve because it is shaped like a bell. The technical name for this is the normal distribution. The term \"normal\" was first introduced by Carl Friedrich Gauss (1777-1855), who supposedly called it that in a belief that it was the most typical distribution of data that one might find in natural phenomena. The following histogram depicts the typical bell shape of the normal distribution.    Histogram of rnorm(51, 6053834, 6823984)    Histogram of rnorm(51, 6053834, 6823984)   If you are curious, you might be wondering how R generated the histogram above, and, if you are alert, you might notice that the histogram that appears above has the word \"rnorm\" in a couple of places. Here’s another of the cool features in R: it is incredibly easy to generate \"fake\" data to work with when solving problems or giving demonstrations. The data in this histogram were generated by R’s rnorm() function, which generates a random data set that fits the normal distribution (more closely if you generate a lot of data, less closely if you only have a little). Some further explanation of the rnorm() command will make sense if you remember that the state population data we were using had a mean of 6,053,834 and a standard deviation of 6,823,984. The command used to generate this histogram was:  hist(rnorm(51, 6043834, 6823984))  There are two very important new concepts introduced here. The first is a nested function call: The hist() function that generates the graph \"surrounds\" the rnorm() function that generates the new fake data. (Pay close attention to the parentheses!) The inside function, rnorm(), is run by R first, with the results of that sent directly and immediately into the hist() function.  The other important thing is the \"arguments that\" were \"passed\" to the rnorm() function. \"Argument\" is a term used by computer scientists to refer to some extra information that is sent to a function to help it know how to do its job. In this case we passed three arguments to rnorm() that it was expecting in this order: the number of observations to generate in the fake dataset, the mean of the distribution, and the standard deviation of the distribution. The rnorm() function used these three numbers to generate 51 random data points that, roughly speaking, fit the normal distribution. So the data shown in the histogram above are an approximation of what the distribution of state populations might look like if,  instead of being reverse-J-shaped (Pareto distribution), they were normally distributed.  The normal distribution is used extensively through applied statistics as a tool for making comparisons. For example, look at the rightmost bar in the previous histogram. The label just to the right of that bar is 3e+07, or 30,000,000. We already know from our real state population data that there is only one actual state with a population in excess of 30 million (if you didn’t look it up, it is California). So if all of a sudden, someone mentioned to you that he or she lived in a state, other than California, that had 30 million people, you would automatically think to yourself, \"Wow, that’s unusual and I’m not sure I believe it.\" And the reason that you found it hard to believe was that you had a distribution to compare it to. Not only did that distribution have a characteristic shape (for example, J-shaped, or bell shaped, or some other shape), it also had a center point, which was the mean, and a \"spread,\" which in this case was the standard deviation. Armed with those three pieces of information, the type\/shape of distribution, an anchoring point, and a spread (also known as the amount of variability), you have a powerful tool for making comparisons.  In the next chapter we will conduct some of these comparisons to see what we can infer about the ways things are in general, based on just a subset of available data, or what statisticians call a sample.   Chapter Challenge   In this chapter, we used rnorm() to generate random numbers that closely fit a normal distribution. We also learned that the state population data was a \"Pareto\" distribution. Do some research to find out what R function generates random numbers using the Pareto distribution. Then run that function with the correct parameters to generate 51 random numbers (hint: experiment with different probability values). Create a histogram of these random numbers and describe the shape of the distribution.   Sources       Carl Friedrich Gauss        Francis Galton        Pareto distribution        Karl Pearson        Ronald Fisher        William Sealy Gosset        Normal Distribution        US Census: State Population Totals and Components of Change: 2010-2019        R Tutorial: Site Map      "
},
{
  "id": "peas-on-x-y-axes",
  "level": "2",
  "url": "beer-farms-and-peas.html#peas-on-x-y-axes",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": "  Peas on x-y axes  "
},
{
  "id": "beer-farms-and-peas-10",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "describe infer "
},
{
  "id": "beer-farms-and-peas-12",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean median range "
},
{
  "id": "beer-farms-and-peas-14",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mode variance "
},
{
  "id": "beer-farms-and-peas-15",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-15",
  "type": "Table",
  "number": "6.1.2",
  "title": "",
  "body": "    WHO  AGE  AGE-MEAN  (AGEMEAN)    Dad  43  43-22=21  21*21=441    Mom  42  42-22=20  20*20=400    Sis  12  12-22=-10  -10*-10=100    Bro  8  8-22=-14  -14*-14=196    Dog  5  5-22=-17  -17*-17=289      Total:  1426      Total\/4:  356.5    "
},
{
  "id": "beer-farms-and-peas-16",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance "
},
{
  "id": "beer-farms-and-peas-17",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard deviation "
},
{
  "id": "beer-farms-and-peas-35",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-35",
  "type": "Figure",
  "number": "6.1.3",
  "title": "",
  "body": "   "
},
{
  "id": "beer-farms-and-peas-37",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-37",
  "type": "Figure",
  "number": "6.1.4",
  "title": "",
  "body": "   "
},
{
  "id": "beer-farms-and-peas-39",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-39",
  "type": "Figure",
  "number": "6.1.5",
  "title": "",
  "body": "   "
},
{
  "id": "beer-farms-and-peas-43",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-43",
  "type": "Figure",
  "number": "6.1.6",
  "title": "",
  "body": "   "
},
{
  "id": "beer-farms-and-peas-45",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-45",
  "type": "Figure",
  "number": "6.1.7",
  "title": "",
  "body": "   "
},
{
  "id": "beer-farms-and-peas-65",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-65",
  "type": "Figure",
  "number": "6.1.8",
  "title": "",
  "body": "  Histogram of USstatePops$V1  "
},
{
  "id": "beer-farms-and-peas-66",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-66",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Histogram of USstatePops$...1 "
},
{
  "id": "beer-farms-and-peas-72",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-72",
  "type": "Figure",
  "number": "6.1.9",
  "title": "",
  "body": "  Histogram of USstatePops$V1  "
},
{
  "id": "beer-farms-and-peas-73",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-73",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Histogram of USstatePops$...1 "
},
{
  "id": "beer-farms-and-peas-76",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-76",
  "type": "Figure",
  "number": "6.1.10",
  "title": "",
  "body": "  Histogram of rnorm(51, 6053834, 6823984)  "
},
{
  "id": "beer-farms-and-peas-77",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-77",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Histogram of rnorm(51, 6053834, 6823984) "
},
{
  "id": "beer-farms-and-peas-85",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-85",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chapter Challenge "
},
{
  "id": "beer-farms-and-peas-87",
  "level": "2",
  "url": "beer-farms-and-peas.html#beer-farms-and-peas-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sources "
},
{
  "id": "r-functions-used-in-this-chapter-1",
  "level": "1",
  "url": "r-functions-used-in-this-chapter-1.html",
  "type": "Subsubsection",
  "number": "6.2",
  "title": "R Functions Used in This Chapter",
  "body": " R Functions Used in This Chapter     mean() Calculate arithmetic mean      median() Locate the median      mode() Tells the data type\/mode of a data object. Important note : Surprisingly, this mode() is NOT a statistical mode. In fact, R does not have a standard in-built function to calculate the statistical mode.      var() Calculate the sample variance      sd() Calculate the sample standard deviation      hist() Produces a histogram graphic     "
},
{
  "id": "r-functions-used-in-this-chapter-1-2",
  "level": "2",
  "url": "r-functions-used-in-this-chapter-1.html#r-functions-used-in-this-chapter-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Important note "
},
{
  "id": "if-all-else-fails",
  "level": "1",
  "url": "if-all-else-fails.html",
  "type": "Subsubsection",
  "number": "6.3",
  "title": "If All Else Fails",
  "body": " If All Else Fails  In case you have difficulty with the read.DIF() or read.table() functions, the code shown below can be copied and pasted (or, in the worst case scenario, typed) into the R console to create the data set used in this chapter.  V1 <- c(4779736,710231,6392017,2915918,37253956, 5029196,3574097,897934,601723,18801310,9687653, 1360301,1567582,12830632,6483802,3046355,2853118, 4339367,4533372,1328361,5773552,6547629,9883640, 5303925,2967297,5988927,989415,1826341,2700551, 1316470,8791894,2059179,19378102,9535483,672591, 11536504,3751351,3831074,12702379,1052567, 4625364,814180,6346105,25145561,2763885,625741, 8001024,6724540,1852994,5686986,563626)  USstatePops <- data.frame(V1)   Question: A bar graph that displays the frequencies of occurrence for a numeric variable is called a     Histogram      Pictogram      Bar Graph      Bar Chart     "
},
{
  "id": "if-all-else-fails-5",
  "level": "2",
  "url": "if-all-else-fails.html#if-all-else-fails-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Question: "
},
{
  "id": "intro2datasci-9",
  "level": "1",
  "url": "intro2datasci-9.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
