function $tag(tagName){
	return document.createElement(tagName);
}

function $$(id) {
    return document.getElementById(id);
}

HTMLElement.prototype.appendAra = function(child){
	this.appendChild(child);
	return this;
}

HTMLElement.prototype.attr = function(attrName, attrValue){
	this.setAttribute(attrName, attrValue);
	return this;
}
HTMLElement.prototype.attrdel = function(attrName){
	this.removeAttribute(attrName);
	return this;
}
HTMLTableRowElement.prototype.createTd = function(elementNumber, code, name, serialNuber){
    var td = $('td'), a = $('a'), small = $('small'), big = $('big'), bdo= $('bdo'), bdi = $('bdi'), div = $('div'), p1 = $('p'), p2 = $('p'), p3 = $('p'), p4 = $('p');
	p1 = small.innerHTML = elementNumber;
	p2 = big.innerHTML = code;
	p3 = bdo.innerHTML = name;
	p4 = bdi.innerHTML = serialNuber;
	a.append(small).append(big).append(name).append(serialNuber);
	div.append(p1).append(p2).append(p3).append(p4);
	td.append(a).append(div);
	this.append(td);
	return this;
}
HTMLTableRowElement.prototype.createTd = function (text) {
    var th = $('th'), p = $('p');
    p.innerHTML = ('text' || '');
    th.append(p);
    this.append(th);
    return this;
}