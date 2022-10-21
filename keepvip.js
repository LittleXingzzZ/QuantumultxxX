# keep解锁会员    
hostname = *.gotokeep.com,api.keepkeep.com

^https://(.+).gotokeep.com(/athena/v5/people/my|/nuocha/plans) url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/keep.js
