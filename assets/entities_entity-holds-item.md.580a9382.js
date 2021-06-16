import{r as t,o as e,c as n,a,w as s,b as l}from"./404.md.f54b00a7.js";const o='{"title":"Entity Holds Item","description":"","frontmatter":{"title":"Entity Holds Item","tags":["recipe"]},"headers":[{"level":2,"title":"Setting up the model in Blockbench","slug":"setting-up-the-model-in-blockbench"},{"level":2,"title":"Setting up behavior pack-side entity","slug":"setting-up-behavior-pack-side-entity"},{"level":2,"title":"Setting up the loot table","slug":"setting-up-the-loot-table"}],"relativePath":"entities/entity-holds-item.md","lastUpdated":1623848148925}',i={},r=a("h1",{id:"entity-holds-item"},[a("a",{class:"header-anchor",href:"#entity-holds-item","aria-hidden":"true"},"#"),l(" Entity Holds Item")],-1),p=l("Intermediate"),c=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[l("This tutorial assumes you have a basic understanding of entities, loot tables, and Blockbench. Make sure to check out the "),a("a",{href:"/guide/custom-entity-full.html"},"tutorial"),l(" on entities, the "),a("a",{href:"/guide/loot_tables-recipes-spawn_rules.html"},"tutorial"),l(" on loot tables and the "),a("a",{href:"/guide/creating-entity-visuals.html"},"tutorial"),l(" on blockbench before starting this tutorial.")])],-1),u=a("p",null,[l("In this tutorial, you will learn to have an entity spawn with an item in its hand. I'll be using a custom "),a("code",null,"mandalorian_armorer' entity and a custom "),l("hammer` item for the examples.")],-1),h=a("h1",{id:"basic-usage"},[a("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),l(" Basic Usage")],-1),d=a("p",null,"This section covers the main features of entities for them to spawn with an item in their hand.",-1),m=a("h2",{id:"setting-up-the-model-in-blockbench"},[a("a",{class:"header-anchor",href:"#setting-up-the-model-in-blockbench","aria-hidden":"true"},"#"),l(" Setting up the model in Blockbench")],-1),b=a("p",null,"First of all, you'll need to have a model in Blockbench that has a map called 'rightArm'. Within this map, there needs to be a submap called 'rightItem'. Position the pivot point of this submap, so it sits in the place you want the entity to hold the item at.",-1),k=a("p",null,[a("img",{src:"/bedrock-wiki-vite/assets/images/tutorials/entity-holds-item/blockbench.png",alt:""})],-1),g=a("h2",{id:"setting-up-behavior-pack-side-entity"},[a("a",{class:"header-anchor",href:"#setting-up-behavior-pack-side-entity","aria-hidden":"true"},"#"),l(" Setting up behavior pack-side entity")],-1),y=a("p",null,[l("Now you'll need to add a "),a("code",null,"minecraft:equipment"),l(" component in the component list for your entity and add a loot table with the desired item.")],-1),f=a("p",null,"In our example it will look like this:",-1),v=l("BP/entity/mandolorian.json"),w=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token property"},'"components"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token punctuation"},"{"),l("\n    "),a("span",{class:"token property"},'"minecraft:equipment"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token punctuation"},"{"),l("\n        "),a("span",{class:"token property"},'"table"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},'"loot_tables/entities/gear/mandolorian.json"'),l("\n    "),a("span",{class:"token punctuation"},"}"),l("\n"),a("span",{class:"token punctuation"},"}"),l("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br")])],-1),_=a("h2",{id:"setting-up-the-loot-table"},[a("a",{class:"header-anchor",href:"#setting-up-the-loot-table","aria-hidden":"true"},"#"),l(" Setting up the loot table")],-1),I=a("p",null,[l("Finally, add the loot table for the entity. It needs to be in "),a("code",null,"loot_tables/entities/<your_loot_table_name>.json"),l(" in the behavior pack. In our case, it's called "),a("code",null,"mandolorian.json"),l(".")],-1),j=a("p",null,[a("code",null,"Warning:"),l(" This isn't the same loot table as what it drops on death. So make sure it has a different name. To have the entity always spawn with the same item, add the following loot table:")],-1),B=l("BP/loot_tables/entities/gear/mandolorian.json"),S=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),l("\n\t"),a("span",{class:"token property"},'"pools"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token punctuation"},"["),l("\n\t\t"),a("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),a("span",{class:"token property"},'"rolls"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),l("\n\t\t\t"),a("span",{class:"token property"},'"entries"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token punctuation"},"["),l("\n\t\t\t\t"),a("span",{class:"token punctuation"},"{"),l("\n\t\t\t\t\t"),a("span",{class:"token property"},'"type"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},'"item"'),a("span",{class:"token punctuation"},","),l("\n\t\t\t\t\t"),a("span",{class:"token property"},'"name"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},'"dd:hammer"'),a("span",{class:"token punctuation"},","),l(),a("span",{class:"token comment"},"// Custom item named 'hammer' with the identifier 'dd'."),l("\n\t\t\t\t\t"),a("span",{class:"token property"},'"weight"'),a("span",{class:"token operator"},":"),l(),a("span",{class:"token number"},"1"),l("\n\t\t\t\t"),a("span",{class:"token punctuation"},"}"),l("\n\t\t\t"),a("span",{class:"token punctuation"},"]"),l("\n\t\t"),a("span",{class:"token punctuation"},"}"),l("\n\t"),a("span",{class:"token punctuation"},"]"),l("\n"),a("span",{class:"token punctuation"},"}"),l("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br")])],-1),P=a("p",null,"If everything went well, you'd have something looking like this:",-1),T=a("p",null,[a("img",{src:"/bedrock-wiki-vite/assets/images/tutorials/entity-holds-item/finished_result.png",alt:""})],-1);i.render=function(l,o,i,x,H,E){const q=t("Label"),C=t("CodeHeader");return e(),n("div",null,[r,a(q,{color:"yellow"},{default:s((()=>[p])),_:1}),c,u,h,d,m,b,k,g,y,f,a(C,null,{default:s((()=>[v])),_:1}),w,_,I,j,a(C,null,{default:s((()=>[B])),_:1}),S,P,T])};export default i;export{o as __pageData};