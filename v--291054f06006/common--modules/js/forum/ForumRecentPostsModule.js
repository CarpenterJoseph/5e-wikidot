WIKIDOT.modules.ForumRecentPostsModule={};WIKIDOT.modules.ForumRecentPostsModule.listeners={updateList:function(a){var b=new Object();if(a!=null){b.page=a}else{b.page=1}b.categoryId=$("recent-posts-category").value;OZONE.ajax.requestModule("forum/ForumRecentPostsListModule",b,WIKIDOT.modules.ForumRecentPostsModule.callbacks.updateList)}};WIKIDOT.modules.ForumRecentPostsModule.callbacks={updateList:function(a){if(!WIKIDOT.utils.handleError(a)){return}$j("#forum-recent-posts-list").html(a.body);OZONE.visuals.scrollTo("recent-posts-container")}};WIKIDOT.modules.ForumRecentPostsModule.init=function(){};WIKIDOT.modules.ForumRecentPostsModule.init();