function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var grand_node = document.querySelector('#grand-node');
  var child = grand_node.querySelector('div');
  while (child.querySelector('div')!=null){
    child = child.querySelector('div')
  };
  return child
}

function increaseRankBy(n){
  var ranked_lists = document.querySelectorAll('ul.ranked-list li');
  for(var i=0; i<ranked_lists.length; i++){
    ranked_lists[i].innerHTML = parseInt(ranked_lists[i].innerHTML)+n;
  }
  return ranked_lists
}
