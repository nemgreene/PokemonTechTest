/* 
Implementing testing is outside the scope of this project, but should be implemented before product goes into production

Next.js offers smooth integrations with both Cypress and Jest. These two libraries are orthoganol. I would propose to write smalller component tests in Jest, and E2E tests in Cypress

Some tests (and how they feedback into future development)

-Verify App loads, and expected content is displayed
-verify user can input data into the search bar, and that the table is updated accordingly, with edge cases (No sanitization of user input may lead inform future sprints)
-Test pagination in both directions
-Test accessibility order for users (Contrast, Responsiveness, Keyboard-Accessibility)
-Verify user can click on a table cell and be redirected
-Verify Data loads after navigation
-Verify user jounrey cached by next in router
-What happens when an erroneous url is accessed manually? No fallback/404 currently in place, ensure graceful degredation

-What happends if there is no response? Minimal errorhandling/no fallback components due to the scop of this project mean that there is not a clearly defined behavior if the API is down/user has lost their network. Features should be implemented for this, and test should be written

Next Steps:
Due to the scope of the project, there is significant room for improvement. While the implementation of the Pokemon Wrapper is a step in the right direction with data caching, theres still an absence of a framework to implement this as well as it could be. The data exchange, even at this scope, is bigger then It should be, qeurying the full list of pokemon and storing it in local state. This should be optimized to only exchange a page worth of data, ensuring more, lighter api calls.

Additionally, as mentioned above, theres little in the way of a robust frameowrk for handling errors. This should be implemented with suspense/fallbacks, toaster notifications, etc.


*/
