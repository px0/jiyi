# What's this?

With Genome now having fancy new pictures, I thought it would be nice
to have some "flashcards" to help new people learn names. I also
wanted to play with some new tech, so here we are!

It's currently very rudimentary, and the the review queue is basically
just a first-in-first-out stack. One of these days I hope to get
around to implementing a
[Spaced Repetition algorithm](https://en.wikipedia.org/wiki/Spaced_repetition)
instead to *really* help people learn the names, but for now I think
this is good enough. If Spaced Repetition sounds interesting to you,
do check out [ANKI](http://ankisrs.net/) though!

It should be mobile friendly, but because the data gets saved to the
local browser storage, it doesn't magically remember whose name you
were trying to learn if you switch between browsers or devices.

If something doesn't work, you are probably not
[Logged into Genome](http://genome.klick.com). Do that, and then try
again. If it still doesn't work, let me know!


# Development

You can find the source code for this project at
[https://github.com/px0/jiyi](https://github.com/px0/jiyi).


The project is written in
[ClojureScript](https://github.com/clojure/clojurescript) and uses
[Reagent](http://reagent-project.github.io/), a ReactJS wrapper, as
the frontend technology. The frontend framework is
[MaterializeCSS](http://materializecss.com/).

The source code should be relatively straight-forward, if you're
familiar with those technologies, but feel free to ask me anything.

## Emacs notes

Emacs/Cider: Connect to the running figwheel instance and have cider
 autocomplete and stuff working:

```
	lein figwheel
	cider-connect
	-> localhost
	-> 7002
	(use 'figwheel-sidecar.repl-api)
	(cljs-repl)
	C-c C-k
```
