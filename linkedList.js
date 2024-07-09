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

	prepend(value) {
		if (this.#head === null) {
			this.#head = this.#tail = new Node(value);
		} else {
			this.#head = new Node(value, this.#head);
		}

		this.#size++;
	}

	at(index) {
		let tmp = this.#head;
		for (let i = 1; i <= index; i++) {
			if (tmp === null) {
				return null;
			}
			tmp = tmp.link;
		}
		return tmp;
	}

	pop() {
		if (this.#head === null) {
			return;
		}

		if (this.#head === this.#tail) {
			this.#head = this.#tail = null;
		} else {
			let tmp = this.#head;

			while (tmp.link !== this.#tail) {
				tmp = tmp.link;
			}
			tmp.link = null;

			this.#tail = tmp;
		}

		this.#size--;
	}

	find(value) {
		let tmp = this.#head;
		for (let i = 0; tmp; i++) {
			if (tmp.value === value) {
				return i;
			}
			tmp = tmp.link;
		}
		return null;
	}

	contains(value) {
		return this.find(value) !== null;
	}

	removeAt(index) {
		if (this.#head === null || index < 0 || index >= this.#size) {
			return;
		}

		if (index === 0) {
			if (this.#head === this.#tail) {
				this.#head = this.#tail = null;
			} else {
				this.#head = this.#head.link;
			}
		} else {
			let tmp = this.#head;
			for (let i = 1; i < index; i++) {
				// loop until just before the index node
				tmp = tmp.link;
			}

			if (tmp.link === this.#tail) {
				tmp.link = null;
				this.#tail = tmp;
			} else {
				tmp.link = tmp.link.link;
			}
		}

		this.#size--;
	}

	insertAt(value, index) {}
}

export default LinkedList;
