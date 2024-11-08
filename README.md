# assignmentlean

# Test case goal : To validate user is able to login into sauce demo account and can add any three random items for checkout

# Technical Undersatnding : To run the mentiond tests user should have basic setup with node and playwright and idea of type scripts.

# Test Implenenation - I have created a single tests but we can break down in smaller scenarios also
  # can have Login as independent test
  # can have selecting 3 random items as an indepnedent test
  # can have chekout as an indepnedent test 

# Assertion Used for the test validaion
 # user is able to login successsfuly and on landing page do we have expected title / text
 # user is able to add any 3 random items if 3 items are not avaliable then test will fail with valid console message.
 # user is able to checkout all three items with given address and assert item counts , Payment information and shipping information.
 # user is able to Fininsh the checkout and assertion is to check text message after successful event.
 
# Execution -  You can run the test with command "npx playwright test"

# Reporting -  Have done the all required configuartion in "playwright.config.ts", in repo you can check under "playwright-report" folders.

# Failure Analysis - Have 
 
