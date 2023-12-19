export const GET = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/terwerinc/store/main/plugins.json');

        if (!res.ok) {
            return Response.json({error: `HTTP error! Status: ${res.status}`, data: null});
        }

        let data;
        try {
            data = await res.json();
        } catch (e1: any) {
            return Response.json({error: `Error parsing JSON: ${e1.message}`, data: null});
        }

        return Response.json(data);
    } catch (e2: any) {
        return Response.json({error: e2.message, data: null});
    }
};
