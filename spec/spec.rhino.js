
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.9.1/lib/jspec.js')
load('lib/timers.js')

JSpec
.exec('spec/spec.core.js')
.run({ formatter : JSpec.formatters.Terminal })
.report()