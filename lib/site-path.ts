const repoBasePath = "/timurgromov-site-2026";

export function sitePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (path.startsWith(`${repoBasePath}/`)) {
    return path;
  }

  return process.env.NODE_ENV === "production" ? `${repoBasePath}${path}` : path;
}
