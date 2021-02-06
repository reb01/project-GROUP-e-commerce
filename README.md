# Wearables E-Commerce Project

[See the list of TEAMS](__documentation/TEAMS.md)

You will make use of _everything_ that you have learned thus far in the bootcamp to build an e-commerce app that will showcase all of the provided _wearables_ items.

The stack is React.Js, Redux, Node.Js, and styled-components.

Your node server should be RESTful and follow REST principles, at least to the extent we learned during the bootcamp.

---

**✋ You CANNOT use any external UI libraries, including, but not limited to, Material UI, Bootstrap.**

---

## Getting Started

<img src="./server/assets/software-dev-path.jpg" style="width: 100%;" />

You have your assignment and your team. What should you do first? This will vary for every team, and even every team member.

**The important thing is to NOT just jump in and start coding!**

There probably shouldn't be any coding until very near the end of the first day.

## Meet your Product Manager!

Each team has been assigned a product manager. This person is in charge of answering questions, guiding you and basically preventing everything from falling apart!

This person should be present for some of your team meetings, but not all. PMs are super busy people and have multiple projects, people to manage. 😉

## Planning

1. You will break into 3 groups (with your assigned PM.)
2. Your PM will answer any initial questions, and give you more information, as required.
3. Breakout into a separate meeting with just your team. _Your PM will bounce from team to team to make sure you're on track._
4. Time to use the [Kickoff Meeting Agenda](__documentation/KICKOFF_MEETING_AGENDA.md)

### First team meeting

It could also be a good/fun idea to give yourselves an original team name. :)

Your first team meeting should start with the [Kickoff Meeting Agenda](__documentation/KICKOFF_MEETING_AGENDa.md).

[Successful Software Project Delivery in 10 Steps](https://www.appnovation.com/blog/successful-software-project-delivery-10-steps).

💡 How a project starts is indicative of how it will end.

## Teamwork

The most important aspect of this project is the ability to work in a team. No matter your contribution to the project, you should understand the **FULL** codebase. This will require that you

- **review** each other's code
- **ask** questions when you don't understand
- **comment** your code extensively. _Always go for clarity over brevity._

## GitHub

see the [GITHUB Document](__documentation/GITHUB.md)

## For Boris, Sandra and Rebecca

(1 time thing)
Set Ellie's repo as parent
`git remote add parent https://github.com/EL-Lefebvre/project-GROUP-e-commerce.git`

Confirm Parent added
`git remote -v`

Should have something like:
`origin  https://github.com/BorSma/project-GROUP-e-commerce.git (fetch)`
`origin  https://github.com/BorSma/project-GROUP-e-commerce.git (push)`
`parent  https://github.com/EL-Lefebvre/project-GROUP-e-commerce.git (fetch)`
`parent  https://github.com/EL-Lefebvre/project-GROUP-e-commerce.git (push)`

(Every time)
To resolve conflicts and start new change
Fetching changes (not merged yet)
`git fetch parent`

To merge
`git merge parent/master`

## For Ellie
Before merging or starting a change 

Checkout master branch in local repo
`git checkout master`
Pull changes from origin
`git pull`
Create and checkout branch
`git checkout -b "branch-name"`
OR
Checkout current branch
`git checkout branch-name`
 Merge changes from local master to current branch
 `git merge master`

 ## FOR EVERYONE
Stage current changes
 `git add .`
 Commit changes locally
 `git commit -m "Your message"`
 Push your local commits to individual repo (to Github)
 `git push`

[ ON GITHUB: submit PR against Ellie's ]
See past changes
`git log`
Undo local last commit 
`git reset --soft HEAD~1`