# Mind Reader Project

## Concept
- Implement state management
- Create a single page web app
- Use state management to:
    - Progress forward to next view
    - Move backward to previous view
    - Reset to first view
- App should prompt user to click through the single page app and see a new view for every step
- User should be able to scroll through numbers to find their symbol (page 5)

## Page Elements/Page Progression
**Page 1:** (Event: Click GO)
- I can read your mind (h1>)
- GO button (button>)
**Page 2:** (Events: Click GO || Click RESET)
- Pick a number from 0-99 (h1>)
- NEXT button (button>)
- When you have your number click next (p>)
- RESET button (button>)
**Page 3:** (Events: Click GO || Click RESET)
- Add both digits together to get a new number (h1)
- NEXT button (button)
- Ex: 14 is 1 + 4 = 5 (p)
- Click next to proceed (p)
- RESET button (button)
**Page 4:** (Events: Click GO || Click RESET)
- Subtract your new number from the original number (h1)
- NEXT button (button)
- Ex: 14 - 5 = 9 (p)
- Click next to proceed (p)
- RESET button (button)
**Page 5:** (Events: Click REVEAL || Click RESET)
- 0 - &
- 1 - @
- 2 - $
- 3 - B
- …  (h1)
REVEAL button (button)
- Find your new number (p)
- Note the symbol besides the number (p)
- RESET button (button)
**Page 6:** (Event: Click RESET)
- & (h1)
- Your symbol is: (p)
- & (p)
- RESET button (button)

## Pseudo
- Natural language 

## Procedural
//START PROGRAM
START
INIT
END
//END PROGRAM

## Functional
- Functions

## Object Oriented
- Objects


