# SaladPlus

This project is a first attempt at developing a user-friendly ordering platform. To keep it simple, it focuses on configuration of salads and sandwiches. 

## Features
- Selection of item type leading to display of choices within a category
- Selection of an item leading to customization options
- Pay screen with validation for certain values and date selection

### Behind the Scenes Features
- NGRX using reducers, selectors, and effects to hold, modify, and fetch state
- basic api to fetch static data
- mock data using intercepotors
- reactive & template forms

## Things I Learned
- methods for selecting on-screen content (or disabling it)
- methods for folder structuring
- UI basics
- use of services & helpers
- VS Code shortcuts and visual enhancements
- how to configure a lint file
- how to make a mock server using json-server
- the index signature data model!
- the importance of color palletes
- basic routing

## Notes for the Curious
You're unlikely to love this app as it is just a first attempt at getting things to work, but I loved making it. My favorite part was getting the item view to expand and collapse. It was much easier than I expected and I'm excited about adding in animations in the future that make it less jarring to work with. 
I'm also excited about better from-the-beginning planning for styling utilizing sass variables for color pallet and style sheet imports. I intentionally stayed away from most things bootstrap because I learn the most when I do things the hard way. 
There were parts of this that were hard. It took me much longer than I expected to get the hang of NGRX and how to properly utilize it. Articles on "how you're using selectors wrong" and the like helped me through a bunch. I also can't complain about the use of ngrx-etc. Thanks Tim Schryver & team!
