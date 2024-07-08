class Node {
	constructor(value = null, link = null) {
		this.value = value;
		this.link = link;
	}
}

class LinkedList {
	#head = null;
	#tail = null;
	#size = 0;

	head() {
		return this.#head;
	}

	tail() {
		return this.#tail;
	}

	size() {
		return this.#size;
	}

	toString() {
		let string = "";
		let tmp = this.#head;

		while (tmp) {
			string += `( ${tmp.value} ) -> `;
			tmp = tmp.link;
		}

		return string.concat("null");
	}

	append(value) {
		if (this.#head === null) {
			this.#head = this.#tail = new Node(value);
		} else {
			this.#tail.link = new Node(value);
			this.#tail = this.#tail.link;
		}

		this.#size++;
	}
}

export default LinkedList;
