resource "aws_eks_cluster" "protection_cluster" {
  name     = "identity-protection-cluster"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = var.private_subnets
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
  ]
}

resource "aws_eks_node_group" "protection_nodes" {
  cluster_name    = aws_eks_cluster.protection_cluster.name
  node_group_name = "protection-worker-nodes"
  node_role_arn   = aws_iam_role.eks_node_role.arn
  subnets         = var.private_subnets

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 3
  }

  instance_types = ["m5.large"]
}
