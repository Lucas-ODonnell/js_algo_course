class Node
  attr_accessor :value, :left, :right
  def initialize(value)
    @value = value 
    @left = nil
    @right = nil
  end
end

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(currentNode=self.root, value)
    return self.root = Node.new(value) if self.root.nil?
    return if currentNode.value == value

    if currentNode.value > value 
      currentNode.left.nil? ? currentNode.left = Node.new(value) : insert(currentNode.left, value)
    else
      currentNode.right.nil? ? currentNode.right = Node.new(value) : insert(currentNode.right, value)
    end
  end
end

bst = BinarySearchTree.new
