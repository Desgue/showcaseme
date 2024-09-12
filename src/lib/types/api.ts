type ActionResponse = {
    success: boolean
    error: string | undefined
}

export function isActionResponse(value: unknown): value is ActionResponse {
    if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        'success' in value &&
        'error' in value
    ) {
        return true;
    }

    return false;

}