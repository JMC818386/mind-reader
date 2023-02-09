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
- **Page 1:** (Event: Click GO)
    - I can read your mind (h1)
    - GO button (button)
- **Page 2:** (Events: Click GO || Click RESET)
    - Pick a number from 0-99 (h1)
    - NEXT button (button)
    - When you have your number click next (p)
    - RESET button (button)
- **Page 3:** (Events: Click GO || Click RESET)
    - Add both digits together to get a new number (h1)
    - NEXT button (button)
    - Ex: 14 is 1 + 4 = 5 (p)
    - Click next to proceed (p)
    - RESET button (button)
- **Page 4:** (Events: Click GO || Click RESET)
    - Subtract your new number from the original number (h1)
    - NEXT button (button)
    - Ex: 14 - 5 = 9 (p)
    - Click next to proceed (p)
    - RESET button (button)
- **Page 5:** (Events: Click REVEAL || Click RESET)
    - 0 - &
    - 1 - @
    - 2 - $
    - 3 - B
    - …  (h1)
REVEAL button (button)
    - Find your new number (p)
    - Note the symbol besides the number (p)
    - RESET button (button)
- **Page 6:** (Event: Click RESET)
    - & (h1)
    - Your symbol is: (p)
    - & (p)
    - RESET button (button)

## Pseudo Code
- On page load (State 1):
    - Display state 1 h1 element
    - Display go button
- User:
    - Clicks go button to progress to state 2

- State 2:
	- Display state 2 h1 element
	- Display state 2 NEXT button
	- Display state 2 p element
	- Display RESET button
- User:
	- Clicks NEXT button to progress to state 3
	- Clicks RESET button to return to state1

- State 3:
	- Display state 3 h1 element
	- Display state 3 NEXT button
	- Display state 3 p element1
    - Display state 3 p element2
	- Display RESET button
- User:
	- Clicks NEXT button to progress to state 4
	- Clicks RESET button to return to state1

- State 4:
	- Display state 4 h1 element
	- Display state 4 NEXT button
	- Display state 4 p element1
    - Display state 4 p element2
	- Display RESET button
- User:
	- Clicks NEXT button to progress to state 5
	- Clicks RESET button to return to state1


- State 5:
	- Display state 5 h1 element
	- Display state 5 REVEAL button
	- Display state 5 p element1
    - Display state 5 p element2
	- Display RESET button
- User:
	- Clicks NEXT button to progress to state 6
	- Clicks RESET button to return to state1

- State 6:
	- Display state 6 h1 element
	- Display state 6 p element1
    - Display state 6 p element2
	- Display RESET button
- User:
	- Clicks RESET button to return to state1
	
	


## Procedural
//Start Program

        START

        INIT

        DISPLAY state 1 page

        INPUT user clicks go button
        IF user clicks go button
            THEN DISPLAY state 2 page

        INPUT user clicks next button
        IF user clicks next button 
        THEN DISPLAY state 3 page
        END IF

        INPUT user clicks reset button
        IF user clicks reset button
            THEN DISPLAY state 1 page
        ENDIF

        INPUT user clicks next button
        IF user clicks next button 
        THEN DISPLAY state 4 page
        END IF

        INPUT user clicks reset button
        IF user clicks reset button
            THEN DISPLAY state 1 page
        ENDIF

        INPUT user clicks next button
        IF user clicks next button 
        THEN DISPLAY state 5 page
        END IF

        INPUT user clicks reset button
        IF user clicks reset button
            THEN DISPLAY state 1 page
        ENDIF

        INPUT user clicks reveal button
        IF user clicks reveal button 
        THEN DISPLAY state 6 page
        END IF

        INPUT user clicks reset button
        IF user clicks reset button
            THEN DISPLAY state 1 page
        ENDIF

    END

//End Program


## Functional
- loadState
- stateOne
- stateTwo
- stateThree
- stateFour
- stateFive
- stateSix

## Object Oriented
- headerElement
- pElementOne
- pElementTwo
- goBtn
- nextBtn
- revealBtn
- resetBtn
