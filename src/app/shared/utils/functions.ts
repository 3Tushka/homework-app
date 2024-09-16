import { v4 as uuidv4 } from 'uuid';

export function hasProperties<T>(
  item: any,
  properties: (keyof T)[]
): item is T {
  return properties.every((property) => property in item);
}

export function getOrGenerateUUID(key: string): string {
  let uuid = sessionStorage.getItem(key);
  if (!uuid) {
    uuid = uuidv4();
    sessionStorage.setItem(key, uuid);
  }
  return uuid;
}
