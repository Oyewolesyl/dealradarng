export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000";

export type ApiResult<T> = {
  data?: T;
  error?: string;
};

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<ApiResult<T>> {
  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("deal_radar_token") : null;

  const headers = new Headers(options.headers);

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return { error: payload?.error || "Request failed" };
    }

    return { data: payload as T };
  } catch {
    return { error: "Could not connect to the backend server." };
  }
}

export function saveSession(token: string, user: unknown) {
  window.localStorage.setItem("deal_radar_token", token);
  window.localStorage.setItem("deal_radar_user", JSON.stringify(user));
}

export function clearSession() {
  window.localStorage.removeItem("deal_radar_token");
  window.localStorage.removeItem("deal_radar_user");
}

export function getStoredUser<T = unknown>(): T | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem("deal_radar_user");

  if (!value) return null;

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}
