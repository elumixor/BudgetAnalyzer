### Goals

- Quickly create an application for analyzing budget
- Take CSV file from RB banking (downloaded)
    - Also implement custom addition of expenses
- Classify made expenses into categories
- Visualize (graph) information:
    - Absolute total expenses
    - Absolute expenses of each category (split graph #1 - can be all displayed on one graph)
    - Relative percentage of each category expenses
    - Select time of display (year, month, custom…)
    - Split even further in categories
		
### Given time

Two day
		
### Implementation

App requirements can be split in two parts:	
- Classification
- Visualization

We could use python with matplotlib for visualization, but it lacks user-friendly GUI interactivity, required by classifications. Thus we will use Node.js with Chart.js and implement everything in html + js.

Tasks
	
1. Define project, goals, plan implementation
1. Set up development environment, create dummy working node.js project
1. Design application appearance
1. Include Chart.js, read data from file, display dummy graph
1. Parse file into unclassified expenses
1. Create Categories section
    1. Create categories tree
        1. Create category
        1. Create subcategory
        1. Edit category
            1. Name
            1. Color
        1. Reorder category (drag and drop)
        1. Delete category (put all expenses into an Unclassified category)
    1. Create Unclassified category that cannot be deleted
    1. Expenses operations
        1. Click on  category to add custom (dummy) expense to that category
        1. Select categories
        1. Context menu for operations
            1. Move to a different category
                1. Option to create category in process
            1. Delete
        1. Copy and Paste
            1. Categories can be selected by clicking
            1. Shortcuts for operations
            1. Shortcuts helper screen (interactive)
    1. Regex filter at the top of the screen
7. Create Visualization section
    1. Plot all categories (from top level, including Uncategorized)
    1. When left clicking on category, it is set as top level
    1. When right clicking, display context menu with options
        1. Zoom in (display as top level)
        1. Zoom out (display parent)
            1. Is not displayed when has no parent category
        1. Ignore (does not display category)
    1. Select time interval using a slider below the graph
        1. Display tooltip when selecting
    1. Below the graph display:
        1. Button to zoom out
            1. Is not displayed when has no parent category
        1. List of ignored categories with button to un-ignore
        1. List of displayed categories with data and options to ignore, zoom in
8. Save configuration to a file. It should contain:
    - Categories data (saved tree)
    - Expenses data (parsed info + category id, where it belongs)
    1. Create context menu with file path
		

Categorization details

1. User can manually create categories
2. Each category can contain subcategories
3. Categories are displayed as a tree, that expands from left to right and to the bottom
    1. Category can be created at a top level, or as a subcategory, by right-clicking
4. When clicking on a category, it expands, showing all containing expenses
5. By default, single 'Unclassified' category is created, which contains all expenses
6. Expenses within category
    1. Can be selected (multiple allowed, by Ctrl/Shift + click)
    1. Can be moved to a different category
        1. Categories are suggested based on string difference
        1. New category can be created here
7. Expenses can be filtered by a rule (regex) in the top of the categories section


### Results

Failed due to:

1. Slow implementation: estimated 3-4 days, instead of 1
1. Overkill: task could be (and was) done in google spreadsheets in one evening
1. Planning and design was insufficient, this led to bad quality code, 
which made further implementation exponentially slower
