export const query_era_opname_uopid =
    `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX era: <http://data.europa.eu/949/>
        PREFIX era_op: <http://data.europa.eu/949/functionalInfrastructure/operationalPoints>
        
        CONSTRUCT {
            ?operationalPoint rdfs:label ?opName, ?uopid;
                era:opName ?opName
                era:uopid ?uopid .
        }
        WHERE {
            SELECT DISTINCT ?operationalPoint ?opName ?uopid (CONCAT(?opName, " ", ?uopid) AS ?name)
            WHERE {
                ?operationalPoint rdf:type era:OperationalPoint ;
                    era:opName ?opName ;
                    era:uopid ?uopid .
            }
        }
    `
