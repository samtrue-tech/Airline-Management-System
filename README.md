/
    -src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
    - tests/ [later]
    

    // point to be noted that always use forward slash in git path and not backward slash. Backward slash is used in windows but git uses forward slash. So always use forward slash in git path.

    .gitignore prevents Git from tracking new, untracked files. It does not automatically untrack files that are already in Git.
//git rm --cached FlightsAndServices/src/config/config.json


What does this do?
- git rm removes a file from Git's index.
- --cached removes it from Git tracking without deleting your local file.
- Your config.json will remain on your computer.