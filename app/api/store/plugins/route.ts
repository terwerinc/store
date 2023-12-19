export const GET = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/terwerinc/store/main/plugins.json');

        if (!res.ok) {
            return Response.json({error: `HTTP error! Status: ${res.status}`, data: null});
        }

        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return Response.json({error: 'Response is not in JSON format', data: null});
        }

        const data = await res.json();
        return Response.json(data);
    } catch (e: any) {
        return Response.json({error: e.message, data: null});
    }
};
