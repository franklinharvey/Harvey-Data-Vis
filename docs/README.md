# Submission README  
### INFO 4602-5062  
### Project 3 
### Team 12
 

#### Visualization 1: Technology skill level based on geographic location.
This visualization displays a geographical breakdown of users based on how technologically savvy they are. The categories are split into Ultra Nerd, Technically Savvy, Average User, and Luddite. 

**Data:**

Our Tech Savvy Index is (per country):

    ((# of Luddite * 1) + (# of Average User * 2) + (# of Technically Savvy * 3) + (# of Ultra Nerd * 4))/(Total # of Participants)

**To Run:**

Run `./localServer` and navigate to `Vis1.html`

**Design Process:**

We wanted to see how countries compare against each other based off of participants responses to questions about level of understanding of tech.


#### Visualization 2: Safety and Privacy compared to devices users own.
This visual was created to explore what electronics users owned and to get an idea on who they trusted to teach them more about security online. I used a heat map to portray a lot of data at once for a variety of different people. On the y-axis are the options from the mozilla survey for who users would turn to if they wanted to learn, and on the x-axis are the percentage of those people who own the appliance. When you mouseover a block, a text box will appear to give you more details on the true percentage of the people who own that electronic.
**To Run:**
Included is project3_vis2_data.csv, which gives the html and javascript script the necessary format to run. To recreate this csv, simply run the main.py file using a file in the same format as the originial 100Mb csv provided. Open up and run the html file with a localhost active.
**Design Process:**
I was concerned when I saw that some people trusted the media to teach them about how to protect themselves, and that led me to drill into the data. 

#### Visualization 3: Technology skill level and perceptions of fear.
This visualization displays how technological skill level impacts users perceptions of fear. The visualization displays each skill level in a different colored cluster of circles. Those clusters show users perceptions of what they fear about losing. The blue cluster represents Average users, orange is Luddite, green is Technically savvy, and red is Ultra nerd. The fears users have are split into five categories of privacy, safety, losing touch, none, and other. The size of the circles represents how many users in that skill level had those fears.

**Data:**
To get the data, we manipulated the original datafile and split it based on users biggest fears and who they thought was most resonsible for protecting the online safety, privacy, and security. Those files compared the fear and responsiblity to technology skill level (Ultra Nerd, Technically Savvy, Average User, and Luddite). 
  
**To run:**

Run `./localServer` and navigate to `bubble.html`
Roll over bubbles of skill level to see percentages of perceptions of fear.  

**Design Process:** 
Mozilla was interested in understanding how comfortable online users were with technology, and how that impacted things like how tech savvy users were. We visualized how tech savvy users were, and split skill level into perceptions of fear and responsibility. The goal was to see if there was a connection between skill level and perceptions of fear. 

#### Visualization 4: Technology skill level and perceptions of responsibility.
This visualization displays how technological skill level impacts users perceptions of who they think is responsible for protecting the online safety, privacy, and security of the apps and devices users owned. The visualization displays each skill level in a different colored cluster of circles. Those clusters show users perceptions of responsibility. The blue cluster represents Average users, orange is Luddite, green is Technically savvy, and red is Ultra nerd. The task of respnsibility is split into four categories of creators, me, the government, and doesn't know. The size of the circles represents who users in that skill level thought was responsible.

**Data:**
To get the data, we manipulated the original datafile and split it based on users biggest fears and who they thought was most resonsible for protecting the online safety, privacy, and security. Those files compared the fear and responsiblity to technology skill level (Ultra Nerd, Technically Savvy, Average User, and Luddite). 
  
**To run:**

Run `./localServer` and navigate to `resp.html`
Roll over bubbles of skill level to see percentages of perceptions of responsibility.  

**Design Process:** 
Mozilla was interested in understanding how comfortable online users were with technology, and how that impacted things like how tech savvy users were. We visualized how tech savvy users were, and split skill level into perceptions of fear and responsibility. The goal was to see if there was a connection between skill level and perceptions of who was responsible for protecting the devices users owned.

#### Team Roles
* Kristin Robinson: Visualizaton 3, Visualization 4 design process, coding
* Joel Marquez: Visualization 1, design process, coding
* Franklin Harvey: Visualization 1, design process, coding
* Julio Lopez: Visualization 2, design process, coding
* Jocelyne Agboglo: Design process, ReadMe submission
