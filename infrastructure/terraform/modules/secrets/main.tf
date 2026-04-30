resource "aws_secretsmanager_secret" "api_secrets" {
  name = "identity-protection/api-secrets"
}

resource "aws_secretsmanager_secret_version" "api_secrets_val" {
  secret_id     = aws_secretsmanager_secret.api_secrets.id
  secret_string = jsonencode({
    DB_PASSWORD = var.db_password
    JWT_SECRET  = var.jwt_secret
    OIDC_SECRET = var.oidc_secret
  })
}
