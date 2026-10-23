# Política de seguridad

## Versiones con soporte

| Versión | Soporte |
|---------|---------|
| 1.0.x   | Sí      |

## Cómo reportar una vulnerabilidad

Si encuentras una vulnerabilidad, **no la publiques en un Issue público**.

1. Envía un correo a **antonyNunezCruz@gmail.com** con el asunto "Vulnerabilidad - sistema-gestion-academica".
2. Describe el problema, los pasos para reproducirlo y su posible impacto.
3. Recibirás una respuesta en un plazo máximo de **7 días**.
4. Una vez corregido el problema, se publicará la solución en una nueva versión.

## Buenas prácticas del proyecto

- No se almacenan contraseñas, tokens ni claves privadas en el código.
- Los archivos con credenciales están excluidos mediante `.gitignore`.
- La rama `main` está protegida y solo se modifica mediante Pull Requests.
- Se utilizan Dependabot, Secret scanning y Push protection.
- Las cuentas del equipo usan autenticación multifactor.
